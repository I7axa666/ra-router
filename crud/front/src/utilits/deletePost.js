export default async function deletePost(id) {
  
  try {
    const response = await fetch(`http://localhost:7070/posts/${id}`, {
      method: 'DELETE'
    });
    
    if (!response.ok) {
      throw new Error('Failed to fetch contacts');
    }
    
    return;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}