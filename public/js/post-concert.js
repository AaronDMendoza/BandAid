async function newFormHandler(event) {
  event.preventDefault();
  // const venue_name = document.querySelector("#venue-name").value;
  const date = document.querySelector("#date").value;
  const guarantee = document.querySelector("#guarantee").value;
  const presale_amount = document.querySelector("#presale").value;
  const presale_sold = document.querySelector("#presale-sold").value;
  const actual_payout = document.querySelector("#actual-payout").value;
  const merch_sales = document.querySelector("#merch-sales").value;
  // const twenty_one_plus = document.querySelector("#21:checked") ? true : false;
  const comments = document.querySelector("#comments").value;
  const user_id = document.querySelector("#user-id").value;
  const venue_id = document.querySelector("#venue-id").value;

  // Send fetch request to add a new concert
  const response = await fetch(`api/concerts`, {
    method: "POST",
    body: JSON.stringify({
      // venue_name,
      date,
      guarantee,
      presale_amount,
      presale_sold,
      actual_payout,
      merch_sales,
      // twenty_one_plus,
      comments,
      user_id,
      venue_id,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  //if the concert is added, the 'all' template will be rerendered
  if (response.ok) {
    document.location.replace("/api/concerts");
  } else {
    alert("Failed to add concert");
  }
}

document
  .querySelector("#submit-button")
  .addEventListener("click", newFormHandler);
