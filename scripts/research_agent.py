import os
from smolagents import CodeAgent, LiteLLMModel
from smolagents.tools import TextInspectorTool, SimpleTextBrowser

def main(input_file, output_file, model_id):
    # Read input
    with open(input_file, 'r') as f:
        input_text = f.read()

    # Configure model
    model = LiteLLMModel(model_id=model_id, api_key=os.environ['OPENAI_API_KEY'])

    # Set up tools (based on open_deep_research example)
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

if __name__ == "__main__":
    import argparse
    parser = argparse.ArgumentParser(description="Run research agent with smolagents")
    parser.add_argument('--model', required=True, help="Model ID (e.g., gpt-4o-mini)")
    parser.add_argument('--input', required=True, help="Path to input file")
    parser.add_argument('--output', required=True, help="Path to output file")
    args = parser.parse_args()
    main(args.input, args.output, args.model)
