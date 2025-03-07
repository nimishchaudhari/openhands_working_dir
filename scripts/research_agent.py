import os
import sys
import argparse
from smolagents import CodeAgent, LiteLLMModel
from scripts.text_inspector_tool import TextInspectorTool
from scripts.text_web_browser import SimpleTextBrowser

def main(input_file, output_file):
    """
    Main function to run the research agent.
    
    Args:
        input_file (str): Path to the input file containing the research query.
        output_file (str): Path to the output file where the result will be saved.
    """
    # Retrieve environment variables for the language model
    try:
        model_id = os.environ['LLM_MODEL']
        api_key = os.environ['LLM_API_KEY']
    except KeyError as e:
        print(f"Error: Environment variable {e} is not set.")
        sys.exit(1)

    # Read the research query from the input file
    with open(input_file, 'r') as f:
        input_text = f.read()

    # Configure the language model using environment variables
    model = LiteLLMModel(model_id=model_id, api_key=api_key)

    # Initialize tools for the research agent
    text_inspector = TextInspectorTool(model)
    web_browser = SimpleTextBrowser()
    tools = [text_inspector, web_browser]

    # Define the system prompt for the agent
    system_prompt = (
        "You are a helpful research assistant. Analyze the user's request and the issue context "
        "to provide relevant information or solutions. Use your tools as needed to gather data "
        "or inspect text."
    )

    # Create and run the research agent
    agent = CodeAgent(model=model, tools=tools, system_prompt=system_prompt)
    result = agent.run(input_text)

    # Write the result to the output file
    with open(output_file, 'w') as f:
        f.write(result)

if __name__ == "__main__":
    # Set up command-line argument parsing
    parser = argparse.ArgumentParser(description="Run a research agent with smolagents")
    parser.add_argument('--input', required=True, help="Path to the input file with the research query")
    parser.add_argument('--output', required=True, help="Path to the output file for the result")
    args = parser.parse_args()

    # Execute the main function with provided arguments
    main(args.input, args.output)
