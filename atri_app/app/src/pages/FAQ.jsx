import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useDiv13Cb, useFlex110Cb, useImage74Cb, useImage75Cb, useTextBox152Cb } from "../page-cbs/FAQ";
import "../page-css/FAQ.css";
import "../custom/FAQ";

export default function Faq() {
  const navigate = useNavigate();
  useEffect(() => {
    const unsub = subscribeInternalNavigation((url) => {
      navigate(url);
    });
    return unsub;
  }, [navigate]);

  const location = useLocation();
  useLayoutEffect(()=>{
    fetchPageProps(location.pathname, location.search).then((res)=>{
      updateStoreStateFromController(res.pageName, res.pageState)
    })
  }, [location])

  const Div13Props = useStore((state)=>state["FAQ"]["Div13"]);
const Div13IoProps = useIoStore((state)=>state["FAQ"]["Div13"]);
const Div13Cb = useDiv13Cb()
const Flex110Props = useStore((state)=>state["FAQ"]["Flex110"]);
const Flex110IoProps = useIoStore((state)=>state["FAQ"]["Flex110"]);
const Flex110Cb = useFlex110Cb()
const Image74Props = useStore((state)=>state["FAQ"]["Image74"]);
const Image74IoProps = useIoStore((state)=>state["FAQ"]["Image74"]);
const Image74Cb = useImage74Cb()
const Image75Props = useStore((state)=>state["FAQ"]["Image75"]);
const Image75IoProps = useIoStore((state)=>state["FAQ"]["Image75"]);
const Image75Cb = useImage75Cb()
const TextBox152Props = useStore((state)=>state["FAQ"]["TextBox152"]);
const TextBox152IoProps = useIoStore((state)=>state["FAQ"]["TextBox152"]);
const TextBox152Cb = useTextBox152Cb()

  return (<>
  <Div className="p-FAQ Div13 bpt" {...Div13Props} {...Div13Cb} {...Div13IoProps}>
<Image1 className="p-FAQ Image74 bpt" {...Image74Props} {...Image74Cb} {...Image74IoProps}/>
<Flex1 className="p-FAQ Flex110 bpt" {...Flex110Props} {...Flex110Cb} {...Flex110IoProps}>
<TextBox1 className="p-FAQ TextBox152 bpt" {...TextBox152Props} {...TextBox152Cb} {...TextBox152IoProps}/>
</Flex1>
<Image1 className="p-FAQ Image75 bpt" {...Image75Props} {...Image75Cb} {...Image75IoProps}/>
</Div>
  </>);
}
