// const str = 'I am Grut.';

// console.log(str[0]);
// console.log(str[5]);
// console.log(str.length);

// const newStr = str.slice(0, 9) + "!";
// console.log(newStr);

// "Hello, Ann!".toUpperCase();
// "Hello, Ann!".toLowerCase();
// "Hello, Ann!".startsWith("Hello");
// "Hello, Ann!".endsWith("Ann!");
// "Hello, Ann!".includes("Ann");

// function getInitials(name) {
//     const initialsArray = name.split(' ');
//     return (initialsArray[0][0] + initialsArray[1][0]).toUpperCase();
// }
// console.log(getInitials('ivo Smith'));

// function getInitials1(name) {
//     return name
//         .split(" ")
//         .map((word) => word[0].toUpperCase())
//         .join("");
// }
// console.log(getInitials1('ivo Smith'));

let messages = [
    {
      id: 1,
      body: "Lorem fuck ipsum dolor sit amet, fuck consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      createdAt: "2024-05-01",
    },
    {
      id: 2,
      body: "Ut enim ad minim veniam, fuck quis nostrud exercitation fuck ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      createdAt: "2024-05-02",
    },
    {
      id: 3,
      body: "Duis aute irure dolor fuck in reprehenderit in voluptate fuck velit esse cillum dolore eu fugiat nulla pariatur.",
      createdAt: "2024-05-03",
    }
];

const newMes = messages[0].body.replaceAll('fuck', '***');

const gentelMessages = messages.map(m => ({
    ...m,
    body: m.body.replaceAll('fuck', '***')
}));
console.log(gentelMessages);

