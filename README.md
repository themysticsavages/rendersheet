# rendersheet
Render images pixel-by-pixel in Google Sheets!

![i](https://raw.githubusercontent.com/ajskateboarder/stuff/main/sheet.png)

<sub>Default user avatar</sub>

## How it works
- Sends a GET request to an external API to get a pixel array of a user's image.
- Goes through each row and sets each cell's background color to the color in the pixel array until it sees "IMG_END". 
- When it sees "IMG_END", it moves to the next row.
