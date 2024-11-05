import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "@/store/action/loading";
import { useRouter } from "next/router";
import Typography from "@/components/elements/Typography";
import { Button, Flex } from "antd";
import SimpleImageSlider from "react-simple-image-slider";
import ServicesDescriptionModal from "@/components/elements/Modal";

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

  useEffect(() => {
    fetchAllServices();
  }, []);

  const fetchAllServices = async () => {
    try {
      dispatch(setLoading(true));

      const response = await fetch(
        "https://7c9a-2600-8803-950d-fd00-9c31-d3cf-efdb-6160.ngrok-free.app/api/services/all"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      setAllServices(data);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
    } finally {
    }
  };

  const values = allservices?.filter(
    (items) => Number(items?.id) === Number(serviceItem?.id)
  );

  const handleCancel = () => {
    setIsMOdalOpen(false);
  };

  const OpenModal = (status) => {
    setVideoStatus(status);
    setIsMOdalOpen(true);
  };


  return (
    <div>
      <Flex vertical style={{ padding: 16 }} gap={24}>
        {values &&
          values.length > 0 &&
          values.map((item, index) => {
            const sliderImages = item.services_list_pic.map((pic) => ({
              url: pic?.images,
            }));

            return (
              <div key={index}>
                {sliderImages.length > 0 && (
                  <SimpleImageSlider
                    width={"98%"}
                    height={350}
                    images={sliderImages}
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
            );
          })}

        <Flex style={{ overflow: "scroll" }} vertical gap={16}>
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
            style={{ color: "gray", width: "100%", textAlign: "center" }}
            variant="text14"
          >
            {values ? values[0]?.description : ""}
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
