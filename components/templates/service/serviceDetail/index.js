import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { setLoading } from "@/store/action/loading";
import { useRouter } from "next/router";
import Typography from "@/components/elements/Typography";
import { Carousel, Flex } from "antd";

const ServiceInfoDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const routerId = router?.query?.id;

  const [allservices, setAllServices] = useState();
  useEffect(() => {
    fetchAllServices();
  }, []);

  const fetchAllServices = async () => {
    try {
      dispatch(setLoading(true));

      const response = await fetch(
        "https://3b69-2600-8803-950d-fd00-7937-d04e-c0e1-2c90.ngrok-free.app/api/services/all"
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
    (item) => Number(item?.id) === Number(routerId)
  );
  console.log("DATA", values);

  return (
    <div>
      <Flex vertical style={{ padding: 24 }} gap={24}>
        <Carousel showArrows={false} showThumbs={false} infiniteLoop autoPlay>
          {values &&
            values.length > 0 &&
            values.map((item, index) => {
              // Log the item

              // Check if services_list_pic has items
              return (
                item?.services_list_pic?.length > 0 &&
                item.services_list_pic.map((pic, picIndex) => {
                  // Log each pic
                  console.log(`Service ${picIndex} of Item ${index}:`, pic);

                  return (
                    <div key={picIndex}>
                      <img
                      width={"100%"}
                        src={pic?.images}
                        style={{ height: "400px", borderRadius: 8 }}
                      />
                    </div>
                  );
                })
              );
            })}
        </Carousel>
        <div style={{ overflow: "scroll" }}>
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
        </div>
      </Flex>
    </div>
  );
};

export default ServiceInfoDetail;
