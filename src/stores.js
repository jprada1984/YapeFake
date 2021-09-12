import { writable } from "svelte/store";

export const QRcodigo = writable(localStorage.getItem("QRcodigo") || "");

QRcodigo.subscribe(val => localStorage.setItem("QRcodigo", val));