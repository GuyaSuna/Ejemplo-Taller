const URL = "https://api-react-taller-production.up.railway.app";

const getAllLocales = async (
  q = "",
  type = "",
  priceRange = "",
  rating = "",
  city = "",
  zone = ""
) => {
  console.log(q, type, priceRange, rating, city, zone);

  const response = await fetch(`${URL}/api/locals?q=${q}&type=${type}&priceRange=${priceRange}&rating=${rating}&city=${city}&zone=${zone}`);

  const data = await response.json();
  console.log(data);
  return data;
};

export { getAllLocales };
