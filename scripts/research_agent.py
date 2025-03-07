import os
from smolagents import CodeAgent, LiteLLMModel
from bs4 import BeautifulSoup
import requests
import argparse

def main(input_file, output_file):
    try:
        api_key = os.environ['LLM_API_KEY']
        model_id = os.environ['LLM_MODEL']
    except KeyError as e:
        print(f"Error: Environment variable {e} is not set: {e}")
        exit(1)
    # Read input
    with open(input_file, 'r') as f:
        input_text = f.read()

    # Configure model
    model = LiteLLMModel(model_id=model_id, api_key=api_key)

    # Set up tools
    text_inspector = TextInspectorTool(model)
    web_browser = SimpleTextBrowser()
    tools = [text_inspector, web_browser]

    # Define system prompt
    system_prompt = (
        "You are a helpful research assistant. Analyze the user's request and the issue context "
        "to provide relevant information or solutions. Use your tools as needed."
    )

    # Create and run agent
    agent = CodeAgent(model=model, tools=tools, system_prompt=system_prompt)
    result = agent.run(input_text)

    # Write output
    with open(output_file, 'w') as f:
        f.write(result)


class TextInspectorTool:
    def __init__(self, model):
        self.model = model

    def run(self, url: str):
        """Inspect the text content of a webpage."""
        try:
            response = requests.get(url)
            response.raise_for_status()  # Raise HTTPError for bad responses (4xx or 5xx)
            soup = BeautifulSoup(response.text, 'html.parser')
            text = soup.get_text(separator=' ', strip=True)
            return text
        except requests.exceptions.RequestException as e:
            return f"Error accessing webpage: {e}"


class SimpleTextBrowser:
    def run(self, query: str):
        """Return a snippet from searching the web."""
        search_url = f"https://www.google.com/search?q={query}"
        try:
            response = requests.get(search_url)
            response.raise_for_status()
            soup = BeautifulSoup(response.text, 'html.parser')
            results = soup.find_all('div', class_='tF2Cxc')
            if results:
                snippet = results[0].find('div', class_='IsZvec').text
                return snippet
            else:
                return "No search results found."
        except requests.exceptions.RequestException as e:
            return f"Error during web search: {e}"


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Run research agent with smolagents")

parser.add_argument("--input", required=True, help="Path to input file")
parser.add_argument("--output", required=True, help="Path to output file")
    args = parser.parse_args()
    main(args.input, args.output)
