document.getElementById("orderForm").addEventListener("submit",async function(event){
  event.preventDefault();
  const product_url = document.getElementById("product_url").value;
  const quantity = document.getElementById("quantity").value;
  const responseElement = document.getElementById("response");
  try{
    const response = await fetch("http://127.0.0.1:8000/order",{
      method:"POST",
      headers:{
        "content-Type":"application/json"
      },
      body:JSON.stringify({product_rul,quantity})
    });
    if(response.ok){
      const data = await response.json();
      responseElement.textContent = 'Success: ${data.message}';
    }
    else{
      responseElement.textContent = 'Error: Unable to process order.';
    }
    catch(error){
      responseElement.textContent = 'Error: ${error.message}';
  }
});
    
