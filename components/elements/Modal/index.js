import { Card, Empty, Flex, Modal } from "antd";
import React, { useEffect } from "react";
import Typography from "../Typography";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import ReactPlayer from "react-player";

const ServicesDescriptionModal = ({
  isModalOpen,
  handleCancel,
  videostatus,
  itemList,
}) => {
  const videoUrl =
    itemList && itemList?.services_list_videos?.map((item) => item?.videos);
  const beforeurl =
    videoUrl?.length > 0 && videoUrl?.map((item) => item?.before);
  const afterurl = videoUrl?.length > 0 && videoUrl?.map((item) => item?.after);

  return (
    <>
      <Modal
        width={"60%"}
        title={videostatus === "before" ? "Before Video" : "After Video"}
        open={isModalOpen}
        onCancel={handleCancel}
        footer={false}
        centered={true}
      >
        <Flex style={{padding:16}}>
          {videostatus === "before" ? (
            <ReactPlayer
              url={beforeurl[0]} // Adjust the path as needed
              width={"100%"}
              controls
              playing={true}
            />
          ) : (
            <ReactPlayer
              url={afterurl[0]} // Adjust the path as needed
              width={"100%"}
              controls
              playing={true}
            />
          )}
        </Flex>
      </Modal>
    </>
  );
};

export default ServicesDescriptionModal;
