export const getClients = async () => {
   try {
      const response = await fetch('http://localhost:3000/api/clients', {
         method: 'GET',
      });

      const result = await response.json();

      return result;
   } catch (error) {
      console.log(error);
   }
}

export const sendClientData = async (client, method) => {
   try {
      await fetch(`http://localhost:3000/api/clients/${method === 'POST' ? '' : client.id}`, {
         method,
         body: JSON.stringify(client),
      });
   } catch (error) {
      console.log(error);
   }
}

export const deleteClientItem = async (id) => {
   try {
      await fetch(`http://localhost:3000/api/clients/${id}`, {
         method: 'DELETE',
      });
   } catch (error) {
      console.log(error);
   }
}