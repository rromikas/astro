import usersImg from "../images/users";
import emojisImg from "../images/emojis";

export let levels = {
  1: 0,
  2: 100,
  3: 300,
  4: 600,
  5: 1000,
  6: 2000,
  7: 4000,
  8: 10000,
  9: 20000,
  10: 30000,
  11: 60000,
  12: 100000,
};

export let channels = [
  { name: "Voice", enabled: false },
  { name: "General", enabled: true },
  { name: "Music", enabled: true },
  { name: "Memes", enabled: false },
  { name: "Commands", enabled: true },
];

export let users = [
  {
    image: usersImg[0],
    name: "Paulius",
    role: "Admin",
    exp: 1500,
    level: 5,
    warnings: 3,
    status: "muted",
  },
  {
    image: usersImg[1],
    name: "Agnė",
    role: "Admin",
    exp: 3128,
    level: 6,
    warnings: 2,
    status: "banned",
  },
  {
    image: usersImg[2],
    name: "Jokubas",
    role: "Admin",
    exp: 68,
    level: 1,
    warnings: 1,
    status: "temp muted",
  },
  {
    image: usersImg[3],
    name: "Evita",
    role: "guest",
    exp: 15300,
    level: 8,
    warnings: 4,
    status: "okay",
  },
  {
    image: usersImg[0],
    name: "Kristupas",
    role: "Admin",
    exp: 70000,
    level: 11,
    warnings: 3,
    status: "muted",
  },
  {
    image: usersImg[1],
    name: "Martyna",
    role: "user",
    exp: 15680,
    level: 8,
    warnings: 2,
    status: "kicked",
  },
  {
    image: usersImg[2],
    name: "Martynas",
    role: "Admin",
    exp: 250,
    level: 2,
    warnings: 1,
    status: "okay",
  },
  {
    image: usersImg[3],
    name: "Paulina",
    role: "guest",
    exp: 270,
    level: 2,
    warnings: 4,
    status: "okay",
  },
];

export let emojis = [
  { image: emojisImg[0], times: [10, 26, 37] },
  { image: emojisImg[1], times: [26, 10, 41] },
  { image: emojisImg[2], times: [46, 20, 63] },
  { image: emojisImg[3], times: [42, 35, 18] },
];

export let commands = [
  { name: "warn", times: [10, 26, 37], enabled: true },
  { name: "role", times: [26, 10, 41], enabled: true },
  { name: "mute", times: [46, 20, 63], enabled: false },
  { name: "kick", times: [42, 35, 18], enabled: true },
  { name: "play", times: [10, 26, 37], enabled: false },
  { name: "user-info", times: [26, 10, 41], enabled: true },
  { name: "unmute", times: [46, 20, 63], enabled: true },
  { name: "ban", times: [42, 35, 18], enabled: false },
  { name: "unban", times: [10, 26, 37], enabled: true },
  { name: "tempmute", times: [26, 10, 41], enabled: false },
  { name: "role-info", times: [46, 20, 63], enabled: true },
  { name: "emoji", times: [42, 35, 18], enabled: true },
];
