import React, { useEffect, useState } from "react";
import { Card, Flex, ColorPicker, Button, Form, notification } from "antd";
import CardTitle from "../components/GlobalComponents/CardTitle";
import {
  getBranding,
  resetUpdateBranding,
  updateBranding,
} from "../redux/slice/BrandingSlice";
import { useDispatch, useSelector } from "react-redux";
import { brandingSelector } from "../redux/selector/selectors";
import { openNotificationWithIcon } from "../helper";

const Branding = () => {
  const isMobile = window.screen.width < 768;
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const {
    brandingData,
    updateBrandingSuccess,
    updateBrandingError,
    updateBrandingLoading,
  } = useSelector(brandingSelector);

  const [primaryColor, setPrimaryColor] = useState("");
  const [secondaryColor, setSecondaryColor] = useState("");
  const [tertiaryColor, setTertiaryColor] = useState("");
  const [textBaseColor, setTextBaseColor] = useState("");

  const [api, contextHolder] = notification.useNotification({ maxCount: 1 });

  const handleSubmit = (values) => {
    dispatch(updateBranding(values));
  };

  const handleColorChange = (color, field) => {
    const hexColor = color.toHexString();
    form.setFieldsValue({ [field]: hexColor });
    switch (field) {
      case "primary_color":
        setPrimaryColor(hexColor);
        break;
      case "secondary_color":
        setSecondaryColor(hexColor);
        break;
      case "tertiary_color":
        setTertiaryColor(hexColor);
        break;
      case "text_base_color":
        setTextBaseColor(hexColor);
        break;
    }
  };

  useEffect(() => {
    dispatch(getBranding());
  }, [dispatch]);

  useEffect(() => {
    if (brandingData?.brandTheme) {
      const {
        primary_color,
        secondary_color,
        tertiary_color,
        text_base_color,
      } = brandingData.brandTheme;
      form.setFieldsValue(brandingData.brandTheme);
      setPrimaryColor(primary_color);
      setSecondaryColor(secondary_color);
      setTertiaryColor(tertiary_color);
      setTextBaseColor(text_base_color);
    }
  }, [brandingData, form]);

  useEffect(() => {
    if (updateBrandingSuccess) {
      openNotificationWithIcon(api, "success", "Branding updated", "Branding");
    }
    if (updateBrandingError) {
      openNotificationWithIcon(
        api,
        "error",
        "Branding update failed",
        "Branding"
      );
    }
  }, [updateBrandingSuccess, updateBrandingError]);

  return (
    <>
      {contextHolder}
      <Card
        bordered
        title={<CardTitle title="Branding" />}
        extra={
          <Button
            type="primary"
            onClick={() => form.submit()}
            disabled={updateBrandingLoading}
          >
            Save
          </Button>
        }
      >
        <Form name="brandTheme" onFinish={handleSubmit} form={form}>
          <Flex vertical>
            <Flex className="w-full flex-grow" gap={24} vertical={isMobile}>
              <Form.Item
                rules={[
                  { required: true, message: "Please select a primary color" },
                ]}
                name="primary_color"
                className="flex-1"
              >
                <Card hoverable type="inner" title="Primary Color">
                  <ColorPicker
                    size="large"
                    showText
                    value={primaryColor}
                    onChange={(color) =>
                      handleColorChange(color, "primary_color")
                    }
                  />
                </Card>
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please select a secondary color",
                  },
                ]}
                name="secondary_color"
                className="flex-1"
              >
                <Card hoverable type="inner" title="Secondary Color">
                  <ColorPicker
                    size="large"
                    showText
                    value={secondaryColor}
                    onChange={(color) =>
                      handleColorChange(color, "secondary_color")
                    }
                  />
                </Card>
              </Form.Item>
            </Flex>
            <Flex className="w-full flex-grow" gap={24} vertical={isMobile}>
              <Form.Item
                rules={[
                  { required: true, message: "Please select a tertiary color" },
                ]}
                name="tertiary_color"
                className="flex-1"
              >
                <Card hoverable type="inner" title="Tertiary Color">
                  <ColorPicker
                    size="large"
                    showText
                    value={tertiaryColor}
                    onChange={(color) =>
                      handleColorChange(color, "tertiary_color")
                    }
                  />
                </Card>
              </Form.Item>
              <Form.Item
                rules={[
                  { required: true, message: "Please select a text color" },
                ]}
                name="text_base_color"
                className="flex-1"
              >
                <Card hoverable type="inner" title="Text Color">
                  <ColorPicker
                    size="large"
                    showText
                    value={textBaseColor}
                    onChange={(color) =>
                      handleColorChange(color, "text_base_color")
                    }
                  />
                </Card>
              </Form.Item>
            </Flex>
          </Flex>
        </Form>
      </Card>
    </>
  );
};

export default Branding;
