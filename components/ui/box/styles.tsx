import { tva } from "@gluestack-ui/nativewind-utils/tva";
import { isWeb } from "@gluestack-ui/nativewind-utils/IsWeb";

const baseStyle = isWeb
  ? "flex flex-col relative z-0 box-border border-1 list-none min-w-0 min-h-0 bg-blue-500 items-stretch m-0 p-0 text-decoration-none"
  : "";

export const boxStyle = tva({
  base: baseStyle,
});
