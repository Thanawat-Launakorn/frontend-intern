import React from "react";
import { Button, Space } from "antd";
import "./home.css";
import Container from "../../../components/containers";
export default function HomePage() {
  const handleToLocation = () => {
    window.location.href = "https://github.com/Woottikrai/SchduleUser";
  };

  React.useEffect(() => {
    (async () => {})();
  }, []);
  return (
    <Container>
      <div className="p-28 w-full  shadow-sm block">
        <h1 className="fontThai lg:text-7xl text-xs text-transparent">
          ระบบจองเวร
        </h1>
      </div>
      <section className="lg:p-10 p-5 text-center tracking-normal">
        <h1 className="lg:text-7xl text-xs uppercase font-bold mb-5">
          booking system
        </h1>
        <p className="lg:text-lg text-sm font-normal lg:mb-8">
          Help designers/developers building beautiful products more flexible
          and working with happiness
        </p>
        <Space wrap>
          <Button type="primary" size="large" onClick={handleToLocation}>
            View Code
          </Button>
          <div className="mx-1"></div>
          <Button size="large">Default Button</Button>
        </Space>
        {/* GridLayoutTop */}
      </section>
    </Container>
  );
}
