import { render, screen } from "@testing-library/react";
import BarChart from "../../../../src/components/atom/charts/barChart";

describe("BarChart", () => {
  it("should be rendered", () => {
    const data = [
      {
        "country": "France",
        "registeredCount": 13,
        "activeCount": 0
      },
      {
        "country": "Democratic Republic of the Congo",
        "registeredCount": 12,
        "activeCount": 0
      },
      {
        "country": "United States",
        "registeredCount": 6,
        "activeCount": 0
      },
    ]
    const { container } = render(<BarChart data={data} />)
    // @ts-ignore
    expect(container.firstChild.classList.contains('bar-chart')).toBe(true)

  });
});