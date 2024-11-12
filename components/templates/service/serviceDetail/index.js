import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "@/store/action/loading";
import { useRouter } from "next/router";
import Typography from "@/components/elements/Typography";
import { Button, Flex } from "antd";
import SimpleImageSlider from "react-simple-image-slider";
import ServicesDescriptionModal from "@/components/elements/Modal";
import { ArrowLeftOutlined } from "@ant-design/icons";

const ServiceInfoDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { item } = router.query;

  const [serviceItem, setServiceItem] = useState(null);

  useEffect(() => {
    if (item) {
      const parsedItem = JSON.parse(item); // Deserialize the item object
      setServiceItem(parsedItem);
    }
  }, [item]);

  const [allservices, setAllServices] = useState();
  const [videostatus, setVideoStatus] = useState("");
  const [ismodalOpen, setIsMOdalOpen] = useState(false);

  
  const handleCancel = () => {
    setIsMOdalOpen(false);
  };

  const OpenModal = (status) => {
    setVideoStatus(status);
    setIsMOdalOpen(true);
  };

  const handleBack = () => {
    router.back();
  };

  const sliderImage = serviceItem?.services_list_pic.map((pic) => ({
    url: pic?.images,
  }));
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          padding: 8,
          gap: 16,
          alignItems: "center",
        }}
      >
        <Button
          type="text"
          icon={<ArrowLeftOutlined />}
          onClick={handleBack}
        ></Button>
        <Typography variant="heading18">{serviceItem?.name}</Typography>
      </div>
      <Flex vertical style={{ padding: 16 }} gap={24}>
        <div>
          {sliderImage && (
            <SimpleImageSlider
              width={"98%"}
              height={400}
              images={sliderImage}
              showBullets={true}
              showNavs={true}
              bgColor="#f9f9f9"
              slideDuration={0.5}
              autoPlay={true}
              autoPlayDelay={3.0}
              style={{ objectFit: "cover" }}
            />
          )}
        </div>

        <Flex 
        // style={{ overflow: "scroll" }}
         vertical gap={16}>
          <Typography
            style={{ textAlign: "center", paddingBottom: 16 }}
            variant="heading16"
          >
            Watch some video!!
          </Typography>
          <Flex justify="space-evenly" gap={12}>
            <Button
              onClick={() => OpenModal("before")}
              style={{ backgroundColor: "#2E8B57", color: "white" }}
            >
              Before Video
            </Button>
            <Button
              onClick={() => OpenModal("after")}
              style={{ backgroundColor: "#2E8B57", color: "white" }}
            >
              After Video
            </Button>
          </Flex>
          <Typography
            style={{ textAlign: "center", paddingBottom: 16 }}
            variant="heading16"
          >
            Description
          </Typography>
          <Typography
            style={{ color: "grey", width: "100%", textAlign: "center" }}
            variant="text22"
          >
            {serviceItem ? serviceItem?.description : ""}
          </Typography>
        </Flex>
      </Flex>
      <ServicesDescriptionModal
        isModalOpen={ismodalOpen}
        handleCancel={handleCancel}
        videostatus={videostatus}
        itemList={serviceItem}
      />
    </div>
  );
};

export default ServiceInfoDetail;
