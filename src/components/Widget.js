import React, { useEffect, useRef, useState } from "react";
import Chart from "chart.js/auto";
import "./Widget.css";

const Widget = ({ widget, removeWidget }) => {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current.getContext("2d");

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    const width = canvasRef.current.parentNode.offsetWidth || 400;
    const height = canvasRef.current.parentNode.offsetHeight || 400;

    canvasRef.current.width = width;
    canvasRef.current.height = height;

    chartRef.current = new Chart(canvas, {
      type: widget.graphType,
      data: {
        labels: ["Red", "Blue", "Yellow", "Green"],
        datasets: [
          {
            data: [12, 19, 3, 5],
            backgroundColor: ["red", "blue", "yellow", "green"],
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: true,
        scales: {
          x: {
            display: true,
            beginAtZero: true,
          },
          y: {
            display: true,
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [widget.graphType, widget.id]);

  return (
    <div className="widget">
      <div className="widget-header">
        <h4>{widget.title}</h4>
        <button
          className="remove-widget-btn"
          onClick={() => removeWidget(widget.id)}
        >
          X
        </button>
      </div>
      <p>{widget.description}</p>
      {widget.graphType !== "none" && <canvas ref={canvasRef}></canvas>}
    </div>
  );
};

export default Widget;
