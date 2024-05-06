export default async function getContacts() {
  try {
    const response = await fetch('http://localhost:7070/posts');
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    const data = await response.json();
    
    return data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}