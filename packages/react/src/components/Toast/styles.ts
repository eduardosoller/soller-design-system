import { styled } from "../../styles";

export const ToastContainer = styled("div", {
  padding: "$6",
  borderRadius: "$md",
  backgroundColor: "$gray800",
  border: "1px solid $gray500",
  display: "flex",
  alignContent: "center",
  justifyContent: "space-between",
});

ToastContainer.displayName = "Toast";
