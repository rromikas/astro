import usersImg from "../images/users";
import emojisImg from "../images/emojis";

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
    name: "Ugne",
    role: "administrator",
    score: 12,
    warnings: 3,
    status: "muted",
  },
  {
    image: usersImg[1],
    name: "John",
    role: "administrator",
    score: 15,
    warnings: 2,
    status: "banned",
  },
  {
    image: usersImg[2],
    name: "Jokubas",
    role: "administrator",
    score: 22,
    warnings: 1,
    status: "temp muted",
  },
  {
    image: usersImg[3],
    name: "Alvydas",
    role: "guest",
    score: 37,
    warnings: 4,
    status: "okay",
  },
  {
    image: usersImg[0],
    name: "Evita",
    role: "administrator",
    score: 18,
    warnings: 3,
    status: "muted",
  },
  {
    image: usersImg[1],
    name: "Jonas",
    role: "user",
    score: 19,
    warnings: 2,
    status: "kicked",
  },
  {
    image: usersImg[2],
    name: "Martynas",
    role: "administrator",
    score: 25,
    warnings: 1,
    status: "okay",
  },
  {
    image: usersImg[3],
    name: "Kajus",
    role: "guest",
    score: 37,
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
