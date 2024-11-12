import ServicesDescriptionModal from "@/components/elements/Modal";
import Typography from "@/components/elements/Typography";
import { Button, Card } from "antd";
import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { setLoading } from "@/store/action/loading";
import { useDispatch } from "react-redux";

const ListofServices = () => {
  const [ismodalOpen, setIsMOdalOpen] = useState(false);
  const [ids, setId] = useState("");
  const [serviceData, setServiceData] = useState();
  const handleCancel = () => {
    setIsMOdalOpen(false);
  };
  const OpenModal = (id) => {
    setId(id);
    setIsMOdalOpen(true);
  };

    const navToInfo = (item) => {
      if (item) {
        const itemString = JSON.stringify(item); // Serialize the item object
        router.push({
          pathname: "/services/info",
          query: { item: itemString }, // Pass the serialized item
        });
      }
    };
  const dispatch = useDispatch();
  const router = useRouter();
  const id = router?.query?.id;
  const handleBack = () => {
    router.back();
  };
  const fetchServicesList = async () => {
    try {
      dispatch(setLoading(true));

      const response = await fetch(
        `https://def2-2600-8803-950d-fd00-c45-bd1a-9eb6-6c1c.ngrok-free.app/api/services/${id}/lists/`
      );
      if (!response.ok) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      const data = await response.json();
      setServiceData(data);
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setLoading(false));
    } finally {
    }
  };
  useEffect(() => {
    fetchServicesList();
  }, []);
  const data = serviceData?.filter((item) => item.id === ids);
  return (
    <>
      <div
        style={{
          padding: 16,
          backgroundColor: "rgb(214, 245, 214)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            paddingBottom: 24,
            gap: 16,
            alignItems: "center",
          }}
        >
          <Button
            type="text"
            icon={<ArrowLeftOutlined />}
            onClick={handleBack}
          ></Button>
          <Typography variant="heading18">
            List of services of{" "}
            {serviceData ? serviceData[0]?.related_service?.name : ""}{" "}
          </Typography>
        </div>

        <div className="grid3">
          {serviceData?.map((item, index) => {
            return (
              <>
                <div
                  key={index}
                  // onClick={() => OpenModal(item.id)}
                  onClick={()=> navToInfo(item)}
                  className="servicesCard1"
                >
                  <img
                    src={
                      item?.services_list_pic
                        ? item?.services_list_pic[0]?.images
                        : ""
                    }
                    style={{ width: "100%", height: 300, borderRadius: 8 }}
                  />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      paddingTop: 8,
                    }}
                  >
                    <Typography variant="heading16">{item?.name} </Typography>
                  </div>
                </div>
              </>
            );
          })}

          <ServicesDescriptionModal
            isModalOpen={ismodalOpen}
            handleCancel={handleCancel}
            serviceData={data}
          />
        </div>
      </div>
    </>
  );
};

export default ListofServices;
