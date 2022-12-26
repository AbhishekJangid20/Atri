import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex6 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox6 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { Image as Image5 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { useFlex106Cb, useFlex107Cb, useFlex108Cb, useFlex109Cb, useTextBox148Cb, useImage70Cb, useImage73Cb, useImage72Cb, useTextBox149Cb, useTextBox150Cb } from "../page-cbs/Testimonials";
import "../page-css/Testimonials.css";
import "../custom/Testimonials";

export default function Testimonials() {
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

  const Flex106Props = useStore((state)=>state["Testimonials"]["Flex106"]);
const Flex106IoProps = useIoStore((state)=>state["Testimonials"]["Flex106"]);
const Flex106Cb = useFlex106Cb()
const Flex107Props = useStore((state)=>state["Testimonials"]["Flex107"]);
const Flex107IoProps = useIoStore((state)=>state["Testimonials"]["Flex107"]);
const Flex107Cb = useFlex107Cb()
const Flex108Props = useStore((state)=>state["Testimonials"]["Flex108"]);
const Flex108IoProps = useIoStore((state)=>state["Testimonials"]["Flex108"]);
const Flex108Cb = useFlex108Cb()
const Flex109Props = useStore((state)=>state["Testimonials"]["Flex109"]);
const Flex109IoProps = useIoStore((state)=>state["Testimonials"]["Flex109"]);
const Flex109Cb = useFlex109Cb()
const TextBox148Props = useStore((state)=>state["Testimonials"]["TextBox148"]);
const TextBox148IoProps = useIoStore((state)=>state["Testimonials"]["TextBox148"]);
const TextBox148Cb = useTextBox148Cb()
const Image70Props = useStore((state)=>state["Testimonials"]["Image70"]);
const Image70IoProps = useIoStore((state)=>state["Testimonials"]["Image70"]);
const Image70Cb = useImage70Cb()
const Image73Props = useStore((state)=>state["Testimonials"]["Image73"]);
const Image73IoProps = useIoStore((state)=>state["Testimonials"]["Image73"]);
const Image73Cb = useImage73Cb()
const Image72Props = useStore((state)=>state["Testimonials"]["Image72"]);
const Image72IoProps = useIoStore((state)=>state["Testimonials"]["Image72"]);
const Image72Cb = useImage72Cb()
const TextBox149Props = useStore((state)=>state["Testimonials"]["TextBox149"]);
const TextBox149IoProps = useIoStore((state)=>state["Testimonials"]["TextBox149"]);
const TextBox149Cb = useTextBox149Cb()
const TextBox150Props = useStore((state)=>state["Testimonials"]["TextBox150"]);
const TextBox150IoProps = useIoStore((state)=>state["Testimonials"]["TextBox150"]);
const TextBox150Cb = useTextBox150Cb()

  return (<>
  <Flex6 className="p-Testimonials Flex106 bpt" {...Flex106Props} {...Flex106Cb} {...Flex106IoProps}>
<Image5 className="p-Testimonials Image70 bpt" {...Image70Props} {...Image70Cb} {...Image70IoProps}/>
<TextBox6 className="p-Testimonials TextBox148 bpt" {...TextBox148Props} {...TextBox148Cb} {...TextBox148IoProps}/>
</Flex6>
<Flex6 className="p-Testimonials Flex107 bpt" {...Flex107Props} {...Flex107Cb} {...Flex107IoProps}>
<Flex6 className="p-Testimonials Flex108 bpt" {...Flex108Props} {...Flex108Cb} {...Flex108IoProps}>
<Image5 className="p-Testimonials Image73 bpt" {...Image73Props} {...Image73Cb} {...Image73IoProps}/>
</Flex6>
<Flex6 className="p-Testimonials Flex109 bpt" {...Flex109Props} {...Flex109Cb} {...Flex109IoProps}>
<Image5 className="p-Testimonials Image72 bpt" {...Image72Props} {...Image72Cb} {...Image72IoProps}/>
<TextBox6 className="p-Testimonials TextBox149 bpt" {...TextBox149Props} {...TextBox149Cb} {...TextBox149IoProps}/>
<TextBox6 className="p-Testimonials TextBox150 bpt" {...TextBox150Props} {...TextBox150Cb} {...TextBox150IoProps}/>
</Flex6>
</Flex6>
  </>);
}
