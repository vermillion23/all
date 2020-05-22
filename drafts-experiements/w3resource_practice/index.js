function animate_string(id)

{
    const element = document.getElementById;
    const textNode = element.childNodes[0];
    let text = textNode.data;

    setInterval(() => {
        text = text[text.length - 1] + text.substing(0, text.length - 1);
        textNode.data = text;
    }, 100);
}