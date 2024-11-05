import { Card, Empty, Flex, Modal, Typography } from "antd";
import React, { useState, useEffect, useRef } from "react";
import "video.js/dist/video-js.css";

const ServicesDescriptionModal = ({
  isModalOpen,
  handleCancel,
  videostatus,
  itemList,
}) => {
  const { Text } = Typography;
  const [onPlayVideo, setOnPlayVideo] = useState(false);
  const videoRef = useRef(null); // Video reference

  const videoUrl =
    itemList && itemList?.services_list_videos?.map((item) => item?.videos);
  const beforeurl =
    videoUrl?.length > 0 ? videoUrl.map((item) => item?.before) : [];
  const afterurl =
    videoUrl?.length > 0 ? videoUrl.map((item) => item?.after) : [];

  // Close modal and stop video
  const onCloseModal = () => {
    setOnPlayVideo(false);
    if (videoRef.current) {
      videoRef.current.pause(); // Stop the video playback
    }
    handleCancel(); // Close the modal
  };

  return (
    <Modal
      style={{ height: "50%" }}
      width={"60%"}
      title={videostatus === "before" ? "Before Video" : "After Video"}
      open={isModalOpen}
      onCancel={onCloseModal}
      footer={null}
      centered={true}
    >
      <Flex style={{ padding: 16 }}>
        {videostatus === "before" ? (
          beforeurl.length > 0 ? (
            <video
              ref={videoRef}
              controls
              preload="auto"
              width="100%"
              onPlay={() => setOnPlayVideo(true)}
              onPause={() => setOnPlayVideo(false)}
            >
              <source src={beforeurl[0]} type="video/mp4" />
            </video>
          ) : (
            <Flex style={{ width: "100%" }} align="center" justify="center">
              <Text strong>Video Coming Soon...</Text>
            </Flex>
          )
        ) : afterurl.length > 0 ? (
          <video
            ref={videoRef}
            controls
            preload="auto"
            width="100%"
            onPlay={() => setOnPlayVideo(true)}
            onPause={() => setOnPlayVideo(false)}
          >
            <source src={afterurl[0]} type="video/mp4" />
          </video>
        ) : (
          <Flex style={{ width: "100%" }} align="center" justify="center">
            <Text strong>Video Coming Soon...</Text>
          </Flex>
        )}
      </Flex>
    </Modal>
  );
};

export default ServicesDescriptionModal;
