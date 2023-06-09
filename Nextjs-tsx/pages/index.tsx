import Card from "../components/card";
import Layout from "../components/layout";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import NotificationIcon from "../components/svgs/notification-icon";
import SearchIcon from "../components/svgs/search-icon";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import CarIcon from "../components/svgs/car-icon";
import ChevronDownIcon from "../components/svgs/chevron-down-icon";

import Tables from "../components/table";
import Image from "next/image";
import user from "../public/images/user-01.png"

ChartJS.register(ArcElement, Tooltip);

const data = {
  labels: ["Hired", "Canceled", "Pending"],
  datasets: [
    {
      label: "Total",
      data: [54, 20, 26],
      backgroundColor: ["#006AFF", "#52C93F", "#FF2727"],
    },
  ],
};

const carNumbers = [
  "BK 123123 AB",
  "BK 234324 AB",
  "BK 162565 AB",
  "BK 653576 AB",
];

export default function Home() {
  const [carNumber, setCarNumber] = useState("");
  const [query, setQuery] = useState("");

  // Replace with data from api
  const filteredCarNumber =
    query === ""
      ? carNumbers
      : carNumbers.filter((number) => {
        return number.toLowerCase().includes(query.toLowerCase());
      });

  return (
    <Layout>


    </Layout>
  );
}
