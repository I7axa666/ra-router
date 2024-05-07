export default async function postPost(text, id=0) {

  try {
      if (Number(id) === 0) {
      const response = await fetch('http://localhost:7070/posts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
          id: id,
          content: text 
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
    } else {
        console.log('put')
        const response = await fetch(`http://localhost:7070/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            id: id,
            content: text 
          }),
      });

      if (!response.ok) {
        throw new Error('Failed to fetch contacts');
      }
    }          
    
    
   
    
    return;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
}