import axios from "axios";


export const apiConfig = axios.create({
  baseURL: "http://localhost:3333/",
  headers: {
    Authorization: "Bearer MzQ.Ij0xQZvwEaEc7eTCyVDQRFPE8TKIv1ZX0c6aCqFXpa71FTkPNyIbt3hIOZwh"
  },
});