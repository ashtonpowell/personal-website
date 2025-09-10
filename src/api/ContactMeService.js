const API_URL = import.meta.env.VITE_API_URL;

// Create new contact
export const createContact = async (contactInfo) => {
  const res = await fetch(`${API_URL}/contact`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(contactInfo),
  });
  if (!res.ok) throw new Error("Failed to create new contact");
  return res.json();
};
