import { useState } from "react";

function FilterPanel({ filterFunction, data }) {
  // The value w-x for map-container need to be 1-X for slideover-container

  function toggleSlideover() {
    document
      .getElementById("slideover-container")
      .classList.toggle("invisible");
    document.getElementById("slideover").classList.toggle("translate-x-full");
    document.getElementById("map-container").classList.toggle("w-3/4");
    document.getElementById("map-container").classList.toggle("w-full");
  }

  function onSubmit(event) {
    event.preventDefault();
    const data = {
      minPrice: event.target.minPrice.value,
      maxPrice: event.target.maxPrice.value,
      minSurface: event.target.minSurface.value,
      maxSurface: event.target.maxSurface.value,
      nbRooms: event.target.nbRooms.value,
    };
    filterFunction(data);
  }

  function FilterForm() {
    const priceMin = 0;
    const priceMax = 10000;
    const [minPrice, setMinPrice] = useState(data.minPrice ?? priceMin);
    const [maxPrice, setMaxPrice] = useState(data.maxPrice ?? priceMax);

    const surfaceMin = 0;
    const surfaceMax = 1000;
    const [minSurface, setMinSurface] = useState(data.minSurface ?? surfaceMin);
    const [maxSurface, setMaxSurface] = useState(data.maxSurface ?? surfaceMax);

    // return a form filtering the map offers
    return (
      <form className="mt-20 ml-4 mr-4 p-4 border-4" onSubmit={onSubmit}>
        <div className="grid gap-0 grid-cols-2 grid-rows-5">
          <label className="col-span-2 text-center">Prix</label>
          <label>Min {minPrice}</label>
          <div>
            <input
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="w-full"
              type="range"
              name="minPrice"
              min={priceMin}
              max={priceMax}
            />
          </div>
          <label>Max {maxPrice}</label>
          <div>
            <input
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="w-full"
              type="range"
              name="maxPrice"
              min={priceMin}
              max={priceMax}
            />
          </div>
          <label className="col-span-2 text-center">Surface</label>
          <label>Min {minSurface}</label>
          <div>
            <input
              value={minSurface}
              onChange={(e) => setMinSurface(e.target.value)}
              className="w-full"
              type="range"
              name="minSurface"
              min={surfaceMin}
              max={surfaceMax}
            />
          </div>
          <label>Max {maxSurface}</label>
          <div>
            <input
              value={maxSurface}
              onChange={(e) => setMaxSurface(e.target.value)}
              className="w-full"
              type="range"
              name="maxSurface"
              min={surfaceMin}
              max={surfaceMax}
            />
          </div>
          <label>Nombre de pièces</label>
          <input type="number" min="0" max="10" step={0.5} name="nbRooms" />
          <input type="submit" value="Submit" />
        </div>
      </form>
    );
  }

  return (
    <div>
      <div
        onClick={toggleSlideover}
        className="cursor-pointer h-9 px-5 py-2 text-sm border bg-gray-50 text-gray-500 hover:bg-gray-100 rounded border-gray-300 select-none"
      >
        Filtre
      </div>
      <div
        id="slideover-container"
        className="w-1/4 h-full fixed invisible inset-y-0 right-0"
      >
        <div
          id="slideover"
          className="w-full bg-white h-full absolute right-0 duration-300 ease-out transition-all translate-x-full"
        >
          <div
            onClick={toggleSlideover}
            className="absolute cursor-pointer text-gray-600 top-0 w-8 h-8 flex items-center justify-center right-0 mt-2 mr-2"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </div>
          <FilterForm />
        </div>
      </div>
    </div>
  );
}

function FilterButton({ children }) {
  return (
    <div className="leaflet-bottom leaflet-left">
      <div className="leaflet-control leaflet-bar">{children}</div>
    </div>
  );
}

export { FilterPanel, FilterButton };