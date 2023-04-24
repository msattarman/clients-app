import { createClientsHeader } from "./createHeader.js";
import { createClientsSection } from "./createClientsSection.js";
import { getClients } from "./clientsApi.js";

const createApp = async () => {
   const header = createClientsHeader();
   const clientSection = createClientsSection();
   document.body.append(header, clientSection.main);
   await getClients();
}

createApp();