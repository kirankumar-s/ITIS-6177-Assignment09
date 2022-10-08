def main(args):
    name = args.get("keyword", "stranger")
    greeting = name + " says hello"
    print(greeting)
    return {"body": greeting}