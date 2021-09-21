import { writable } from "svelte/store";

export const QRcodigo = writable(localStorage.getItem("QRcodigo") || "");

export const PriDaNombre = writable(localStorage.getItem("PriDaNombre") || "");
export const PriDaFecha = writable(localStorage.getItem("PriDaFecha") || "");
export const PriDaMonto = writable(localStorage.getItem("PriDaMonto") || "");
export const PriDaPone = writable(localStorage.getItem("PriDaPone") || "");

export const SecDaMonto = writable(localStorage.getItem("SecDaMonto") || "");
export const SecDaFecha = writable(localStorage.getItem("SecDaFecha") || "");
export const SecDaDes = writable(localStorage.getItem("SecDaDes") || "");

QRcodigo.subscribe(val => localStorage.setItem("QRcodigo", val));

PriDaNombre.subscribe(val => localStorage.setItem("PriDaNombre", val));
PriDaFecha.subscribe(val => localStorage.setItem("PriDaFecha", val));
PriDaMonto.subscribe(val => localStorage.setItem("PriDaMonto", val));
PriDaPone.subscribe(val => localStorage.setItem("PriDaPone", val));

SecDaMonto.subscribe(val => localStorage.setItem("SecDaMonto", val));
SecDaFecha.subscribe(val => localStorage.setItem("SecDaFecha", val));
SecDaDes.subscribe(val => localStorage.setItem("SecDaDes", val));