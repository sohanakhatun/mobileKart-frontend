import React, { useState } from "react";
import useProducts from "./contexts/productContext";

const SideBar = ({ setFilteredProducts }) => {
  const { products } = useProducts();

  const [filteredProcessor, setFilteredProcessor] = useState([]);
  const [filteredOS, setFilteredOS] = useState([]);
  const [filteredType, setFilteredType] = useState([]);
  const [filteredMemory, setFilteredMemory] = useState([]);

  const clickHandlerProcessor = (e) => {
    setFilteredProcessor(e.target.value);
  };
  const clickHandlerOS = (e) => {
    setFilteredOS(e.target.value);
  };
  const clickHandlerType = (e) => {
    setFilteredType(e.target.value);
  };
  const clickHandlerMemory = (e) => {
    setFilteredMemory(e.target.value);
  };

  const applyFilters = () => {
    return setFilteredProducts((prev) => {
      return prev.concat(
        products.filter(
          (i) =>
            i.processor === filteredProcessor ||
            i.OS === filteredOS ||
            i.Type === filteredType ||
            i.memory === filteredMemory
        )
      );
    });
  };

  const clearFilters = () => {
    setFilteredProcessor([]);
    setFilteredMemory([]);
    setFilteredOS([]);
    setFilteredType([]);
    setFilteredProducts([]);
  };
  return (
    <>
      {/* Processor */}
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl text-blue-900 font-bold text-center">
          FILTERS
        </h2>
        <div className="mt-2">
          <h4 className="font-bold text-black-900">Processors:</h4>
          <button
            onClick={clickHandlerProcessor}
            className=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2 "
            value="Qualcomm Snapdragon 865 Processor"
          >
            Snapdragon 865
          </button>
          <button
            onClick={clickHandlerProcessor}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2 "
            value="A16 Bionic Chip, 6 Core Processor"
          >
            A16 Bionic Chip
          </button>
          <button
            onClick={clickHandlerProcessor}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2"
            value="Qualcomm Snapdragon 8 Gen 2 Processor"
          >
            Snapdragon 8 Gen 2
          </button>
          <button
            onClick={clickHandlerProcessor}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2"
            value="Qualcomm Snapdragon 8+ Gen 1 Processor"
          >
            Snapdragon 8+ Gen 1
          </button>
          <button
            onClick={clickHandlerProcessor}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2  "
            value="Octa-Core"
          >
            Octa-Core
          </button>
          <button
            onClick={clickHandlerProcessor}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2 "
            value="Google Tensor"
          >
            Google Tensor
          </button>
        </div>
      </div>

      {/* Operating System */}
      <div className="flex flex-col justify-center">
        <div className="mt-2">
          <h4 className="font-bold text-black-900">Operating System:</h4>
          <button
            onClick={clickHandlerOS}
            className=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2  "
            value="Android"
          >
            Android
          </button>
          <button
            onClick={clickHandlerOS}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2  "
            value="iOS"
          >
            iOS
          </button>
        </div>
      </div>
      {/* Storage */}
      <div className="flex flex-col justify-center">
        <div className="mt-2">
          <h4 className="font-bold text-black-900">Memory:</h4>
          <button
            onClick={clickHandlerMemory}
            className=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2 "
            value="256 GB ROM"
          >
            256 GB ROM
          </button>
          <button
            onClick={clickHandlerMemory}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2  "
            value="128 GB ROM"
          >
            128 GB ROM
          </button>
        </div>
      </div>

      {/* Type */}
      <div className="flex flex-col justify-center">
        <div className="mt-2">
          <h4 className="font-bold text-black-900">Type:</h4>
          <button
            onClick={clickHandlerType}
            className=" text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2  "
            value="SmartPhone"
          >
            SmartPhone
          </button>
          <button
            onClick={clickHandlerType}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2  "
            value="Flip"
          >
            Flip
          </button>
          <button
            onClick={clickHandlerType}
            class="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2  "
            value="Phablet"
          >
            Phablet
          </button>
          <button
            onClick={clickHandlerType}
            className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2 text-center me-2 mb-2  "
            value="Fold"
          >
            Fold
          </button>
        </div>
      </div>

{/* Price */}


      {/* Filter button */}
      <div className="flex gap-4 justify-center">
        <button
          onClick={applyFilters}
          className="px-1 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center "
        >
          Apply Filters
        </button>
        <button
          onClick={clearFilters}
          className="px-1 py-2 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center "
        >
          Clear Filters
        </button>
      </div>
    </>
  );
};

export default SideBar;
