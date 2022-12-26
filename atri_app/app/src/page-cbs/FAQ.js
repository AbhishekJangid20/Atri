import { useCallback } from "react";
import { callbackFactory } from "../utils/callbackFactory";
export function useDiv13Cb() {
	const onClick = useCallback(callbackFactory("Div13", "FAQ", "/FAQ", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/Last Paper"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useFlex110Cb() {
	const onClick = useCallback(callbackFactory("Flex110", "FAQ", "/FAQ", "onClick", 
			{
  "handlers": [],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useTextBox152Cb() {
	const onClick = useCallback(callbackFactory("TextBox152", "FAQ", "/FAQ", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage74Cb() {
	const onClick = useCallback(callbackFactory("Image74", "FAQ", "/FAQ", "onClick", 
			{
  "handlers": [
    {
      "sendEventData": true
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}
export function useImage75Cb() {
	const onClick = useCallback(callbackFactory("Image75", "FAQ", "/FAQ", "onClick", 
			{
  "handlers": [
    {
      "navigate": {
        "type": "internal",
        "url": "/Last Paper"
      }
    }
  ],
  "actions": [
    {
      "type": "do_nothing"
    }
  ]
}), [])
	return { onClick }
}