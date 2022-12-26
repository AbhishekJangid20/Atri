import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex1 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image1 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox1 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex10Cb, useFlex15Cb, useFlex16Cb, useFlex17Cb, useFlex18Cb, useImage15Cb, useTextBox37Cb, useTextBox69Cb, useImage21Cb, useTextBox53Cb, useTextBox54Cb, useTextBox55Cb, useTextBox62Cb, useTextBox64Cb, useImage22Cb, useTextBox56Cb, useTextBox57Cb, useTextBox58Cb, useTextBox65Cb, useTextBox66Cb, useImage23Cb, useTextBox59Cb, useTextBox60Cb, useTextBox61Cb, useTextBox67Cb, useTextBox68Cb } from "../page-cbs/Services";
import "../page-css/Services.css";
import "../custom/Services";

export default function Services() {
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

  const Flex10Props = useStore((state)=>state["Services"]["Flex10"]);
const Flex10IoProps = useIoStore((state)=>state["Services"]["Flex10"]);
const Flex10Cb = useFlex10Cb()
const Flex15Props = useStore((state)=>state["Services"]["Flex15"]);
const Flex15IoProps = useIoStore((state)=>state["Services"]["Flex15"]);
const Flex15Cb = useFlex15Cb()
const Flex16Props = useStore((state)=>state["Services"]["Flex16"]);
const Flex16IoProps = useIoStore((state)=>state["Services"]["Flex16"]);
const Flex16Cb = useFlex16Cb()
const Flex17Props = useStore((state)=>state["Services"]["Flex17"]);
const Flex17IoProps = useIoStore((state)=>state["Services"]["Flex17"]);
const Flex17Cb = useFlex17Cb()
const Flex18Props = useStore((state)=>state["Services"]["Flex18"]);
const Flex18IoProps = useIoStore((state)=>state["Services"]["Flex18"]);
const Flex18Cb = useFlex18Cb()
const Image15Props = useStore((state)=>state["Services"]["Image15"]);
const Image15IoProps = useIoStore((state)=>state["Services"]["Image15"]);
const Image15Cb = useImage15Cb()
const TextBox37Props = useStore((state)=>state["Services"]["TextBox37"]);
const TextBox37IoProps = useIoStore((state)=>state["Services"]["TextBox37"]);
const TextBox37Cb = useTextBox37Cb()
const TextBox69Props = useStore((state)=>state["Services"]["TextBox69"]);
const TextBox69IoProps = useIoStore((state)=>state["Services"]["TextBox69"]);
const TextBox69Cb = useTextBox69Cb()
const Image21Props = useStore((state)=>state["Services"]["Image21"]);
const Image21IoProps = useIoStore((state)=>state["Services"]["Image21"]);
const Image21Cb = useImage21Cb()
const TextBox53Props = useStore((state)=>state["Services"]["TextBox53"]);
const TextBox53IoProps = useIoStore((state)=>state["Services"]["TextBox53"]);
const TextBox53Cb = useTextBox53Cb()
const TextBox54Props = useStore((state)=>state["Services"]["TextBox54"]);
const TextBox54IoProps = useIoStore((state)=>state["Services"]["TextBox54"]);
const TextBox54Cb = useTextBox54Cb()
const TextBox55Props = useStore((state)=>state["Services"]["TextBox55"]);
const TextBox55IoProps = useIoStore((state)=>state["Services"]["TextBox55"]);
const TextBox55Cb = useTextBox55Cb()
const TextBox62Props = useStore((state)=>state["Services"]["TextBox62"]);
const TextBox62IoProps = useIoStore((state)=>state["Services"]["TextBox62"]);
const TextBox62Cb = useTextBox62Cb()
const TextBox64Props = useStore((state)=>state["Services"]["TextBox64"]);
const TextBox64IoProps = useIoStore((state)=>state["Services"]["TextBox64"]);
const TextBox64Cb = useTextBox64Cb()
const Image22Props = useStore((state)=>state["Services"]["Image22"]);
const Image22IoProps = useIoStore((state)=>state["Services"]["Image22"]);
const Image22Cb = useImage22Cb()
const TextBox56Props = useStore((state)=>state["Services"]["TextBox56"]);
const TextBox56IoProps = useIoStore((state)=>state["Services"]["TextBox56"]);
const TextBox56Cb = useTextBox56Cb()
const TextBox57Props = useStore((state)=>state["Services"]["TextBox57"]);
const TextBox57IoProps = useIoStore((state)=>state["Services"]["TextBox57"]);
const TextBox57Cb = useTextBox57Cb()
const TextBox58Props = useStore((state)=>state["Services"]["TextBox58"]);
const TextBox58IoProps = useIoStore((state)=>state["Services"]["TextBox58"]);
const TextBox58Cb = useTextBox58Cb()
const TextBox65Props = useStore((state)=>state["Services"]["TextBox65"]);
const TextBox65IoProps = useIoStore((state)=>state["Services"]["TextBox65"]);
const TextBox65Cb = useTextBox65Cb()
const TextBox66Props = useStore((state)=>state["Services"]["TextBox66"]);
const TextBox66IoProps = useIoStore((state)=>state["Services"]["TextBox66"]);
const TextBox66Cb = useTextBox66Cb()
const Image23Props = useStore((state)=>state["Services"]["Image23"]);
const Image23IoProps = useIoStore((state)=>state["Services"]["Image23"]);
const Image23Cb = useImage23Cb()
const TextBox59Props = useStore((state)=>state["Services"]["TextBox59"]);
const TextBox59IoProps = useIoStore((state)=>state["Services"]["TextBox59"]);
const TextBox59Cb = useTextBox59Cb()
const TextBox60Props = useStore((state)=>state["Services"]["TextBox60"]);
const TextBox60IoProps = useIoStore((state)=>state["Services"]["TextBox60"]);
const TextBox60Cb = useTextBox60Cb()
const TextBox61Props = useStore((state)=>state["Services"]["TextBox61"]);
const TextBox61IoProps = useIoStore((state)=>state["Services"]["TextBox61"]);
const TextBox61Cb = useTextBox61Cb()
const TextBox67Props = useStore((state)=>state["Services"]["TextBox67"]);
const TextBox67IoProps = useIoStore((state)=>state["Services"]["TextBox67"]);
const TextBox67Cb = useTextBox67Cb()
const TextBox68Props = useStore((state)=>state["Services"]["TextBox68"]);
const TextBox68IoProps = useIoStore((state)=>state["Services"]["TextBox68"]);
const TextBox68Cb = useTextBox68Cb()

  return (<>
  <Flex1 className="p-Services Flex10 bpt" {...Flex10Props} {...Flex10Cb} {...Flex10IoProps}>
<Image1 className="p-Services Image15 bpt" {...Image15Props} {...Image15Cb} {...Image15IoProps}/>
<TextBox1 className="p-Services TextBox37 bpt" {...TextBox37Props} {...TextBox37Cb} {...TextBox37IoProps}/>
<TextBox1 className="p-Services TextBox69 bpt" {...TextBox69Props} {...TextBox69Cb} {...TextBox69IoProps}/>
</Flex1>
<Flex1 className="p-Services Flex15 bpt" {...Flex15Props} {...Flex15Cb} {...Flex15IoProps}>
<Flex1 className="p-Services Flex16 bpt" {...Flex16Props} {...Flex16Cb} {...Flex16IoProps}>
<Image1 className="p-Services Image21 bpt" {...Image21Props} {...Image21Cb} {...Image21IoProps}/>
<TextBox1 className="p-Services TextBox53 bpt" {...TextBox53Props} {...TextBox53Cb} {...TextBox53IoProps}/>
<TextBox1 className="p-Services TextBox54 bpt" {...TextBox54Props} {...TextBox54Cb} {...TextBox54IoProps}/>
<TextBox1 className="p-Services TextBox55 bpt" {...TextBox55Props} {...TextBox55Cb} {...TextBox55IoProps}/>
<TextBox1 className="p-Services TextBox64 bpt" {...TextBox64Props} {...TextBox64Cb} {...TextBox64IoProps}/>
<TextBox1 className="p-Services TextBox62 bpt" {...TextBox62Props} {...TextBox62Cb} {...TextBox62IoProps}/>
</Flex1>
<Flex1 className="p-Services Flex17 bpt" {...Flex17Props} {...Flex17Cb} {...Flex17IoProps}>
<Image1 className="p-Services Image22 bpt" {...Image22Props} {...Image22Cb} {...Image22IoProps}/>
<TextBox1 className="p-Services TextBox56 bpt" {...TextBox56Props} {...TextBox56Cb} {...TextBox56IoProps}/>
<TextBox1 className="p-Services TextBox57 bpt" {...TextBox57Props} {...TextBox57Cb} {...TextBox57IoProps}/>
<TextBox1 className="p-Services TextBox58 bpt" {...TextBox58Props} {...TextBox58Cb} {...TextBox58IoProps}/>
<TextBox1 className="p-Services TextBox65 bpt" {...TextBox65Props} {...TextBox65Cb} {...TextBox65IoProps}/>
<TextBox1 className="p-Services TextBox66 bpt" {...TextBox66Props} {...TextBox66Cb} {...TextBox66IoProps}/>
</Flex1>
<Flex1 className="p-Services Flex18 bpt" {...Flex18Props} {...Flex18Cb} {...Flex18IoProps}>
<Image1 className="p-Services Image23 bpt" {...Image23Props} {...Image23Cb} {...Image23IoProps}/>
<TextBox1 className="p-Services TextBox59 bpt" {...TextBox59Props} {...TextBox59Cb} {...TextBox59IoProps}/>
<TextBox1 className="p-Services TextBox60 bpt" {...TextBox60Props} {...TextBox60Cb} {...TextBox60IoProps}/>
<TextBox1 className="p-Services TextBox61 bpt" {...TextBox61Props} {...TextBox61Cb} {...TextBox61IoProps}/>
<TextBox1 className="p-Services TextBox67 bpt" {...TextBox67Props} {...TextBox67Cb} {...TextBox67IoProps}/>
<TextBox1 className="p-Services TextBox68 bpt" {...TextBox68Props} {...TextBox68Cb} {...TextBox68IoProps}/>
</Flex1>
</Flex1>
  </>);
}
