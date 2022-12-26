import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex2 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Div } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Carousel } from "@atrilabs/react-component-manifests/src/manifests/Carousel/Carousel.tsx";
import { Image as Image2 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { Button as Button1 } from "@atrilabs/react-component-manifests/src/manifests/Button/Button.tsx";
import { TextBox as TextBox2 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex19Cb, useFlex21Cb, useFlex22Cb, useFlex35Cb, useFlex36Cb, useDiv11Cb, useFlex45Cb, useFlex46Cb, useFlex47Cb, useCarousel3Cb, useImage24Cb, useButton4Cb, useTextBox71Cb, useTextBox74Cb, useImage47Cb, useImage49Cb, useTextBox93Cb, useImage50Cb, useTextBox95Cb, useTextBox94Cb, useImage51Cb, useTextBox96Cb } from "../page-cbs/Projects";
import "../page-css/Projects.css";
import "../custom/Projects";

export default function Projects() {
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

  const Flex19Props = useStore((state)=>state["Projects"]["Flex19"]);
const Flex19IoProps = useIoStore((state)=>state["Projects"]["Flex19"]);
const Flex19Cb = useFlex19Cb()
const Flex21Props = useStore((state)=>state["Projects"]["Flex21"]);
const Flex21IoProps = useIoStore((state)=>state["Projects"]["Flex21"]);
const Flex21Cb = useFlex21Cb()
const Flex22Props = useStore((state)=>state["Projects"]["Flex22"]);
const Flex22IoProps = useIoStore((state)=>state["Projects"]["Flex22"]);
const Flex22Cb = useFlex22Cb()
const Flex35Props = useStore((state)=>state["Projects"]["Flex35"]);
const Flex35IoProps = useIoStore((state)=>state["Projects"]["Flex35"]);
const Flex35Cb = useFlex35Cb()
const Flex36Props = useStore((state)=>state["Projects"]["Flex36"]);
const Flex36IoProps = useIoStore((state)=>state["Projects"]["Flex36"]);
const Flex36Cb = useFlex36Cb()
const Div11Props = useStore((state)=>state["Projects"]["Div11"]);
const Div11IoProps = useIoStore((state)=>state["Projects"]["Div11"]);
const Div11Cb = useDiv11Cb()
const Flex45Props = useStore((state)=>state["Projects"]["Flex45"]);
const Flex45IoProps = useIoStore((state)=>state["Projects"]["Flex45"]);
const Flex45Cb = useFlex45Cb()
const Flex46Props = useStore((state)=>state["Projects"]["Flex46"]);
const Flex46IoProps = useIoStore((state)=>state["Projects"]["Flex46"]);
const Flex46Cb = useFlex46Cb()
const Flex47Props = useStore((state)=>state["Projects"]["Flex47"]);
const Flex47IoProps = useIoStore((state)=>state["Projects"]["Flex47"]);
const Flex47Cb = useFlex47Cb()
const Carousel3Props = useStore((state)=>state["Projects"]["Carousel3"]);
const Carousel3IoProps = useIoStore((state)=>state["Projects"]["Carousel3"]);
const Carousel3Cb = useCarousel3Cb()
const Image24Props = useStore((state)=>state["Projects"]["Image24"]);
const Image24IoProps = useIoStore((state)=>state["Projects"]["Image24"]);
const Image24Cb = useImage24Cb()
const Button4Props = useStore((state)=>state["Projects"]["Button4"]);
const Button4IoProps = useIoStore((state)=>state["Projects"]["Button4"]);
const Button4Cb = useButton4Cb()
const TextBox71Props = useStore((state)=>state["Projects"]["TextBox71"]);
const TextBox71IoProps = useIoStore((state)=>state["Projects"]["TextBox71"]);
const TextBox71Cb = useTextBox71Cb()
const TextBox74Props = useStore((state)=>state["Projects"]["TextBox74"]);
const TextBox74IoProps = useIoStore((state)=>state["Projects"]["TextBox74"]);
const TextBox74Cb = useTextBox74Cb()
const Image47Props = useStore((state)=>state["Projects"]["Image47"]);
const Image47IoProps = useIoStore((state)=>state["Projects"]["Image47"]);
const Image47Cb = useImage47Cb()
const Image49Props = useStore((state)=>state["Projects"]["Image49"]);
const Image49IoProps = useIoStore((state)=>state["Projects"]["Image49"]);
const Image49Cb = useImage49Cb()
const TextBox93Props = useStore((state)=>state["Projects"]["TextBox93"]);
const TextBox93IoProps = useIoStore((state)=>state["Projects"]["TextBox93"]);
const TextBox93Cb = useTextBox93Cb()
const Image50Props = useStore((state)=>state["Projects"]["Image50"]);
const Image50IoProps = useIoStore((state)=>state["Projects"]["Image50"]);
const Image50Cb = useImage50Cb()
const TextBox95Props = useStore((state)=>state["Projects"]["TextBox95"]);
const TextBox95IoProps = useIoStore((state)=>state["Projects"]["TextBox95"]);
const TextBox95Cb = useTextBox95Cb()
const TextBox94Props = useStore((state)=>state["Projects"]["TextBox94"]);
const TextBox94IoProps = useIoStore((state)=>state["Projects"]["TextBox94"]);
const TextBox94Cb = useTextBox94Cb()
const Image51Props = useStore((state)=>state["Projects"]["Image51"]);
const Image51IoProps = useIoStore((state)=>state["Projects"]["Image51"]);
const Image51Cb = useImage51Cb()
const TextBox96Props = useStore((state)=>state["Projects"]["TextBox96"]);
const TextBox96IoProps = useIoStore((state)=>state["Projects"]["TextBox96"]);
const TextBox96Cb = useTextBox96Cb()

  return (<>
  <Flex2 className="p-Projects Flex19 bpt" {...Flex19Props} {...Flex19Cb} {...Flex19IoProps}>
<Image2 className="p-Projects Image24 bpt" {...Image24Props} {...Image24Cb} {...Image24IoProps}/>
</Flex2>
<Flex2 className="p-Projects Flex21 bpt" {...Flex21Props} {...Flex21Cb} {...Flex21IoProps}>
<Flex2 className="p-Projects Flex22 bpt" {...Flex22Props} {...Flex22Cb} {...Flex22IoProps}>
<TextBox2 className="p-Projects TextBox71 bpt" {...TextBox71Props} {...TextBox71Cb} {...TextBox71IoProps}/>
<TextBox2 className="p-Projects TextBox74 bpt" {...TextBox74Props} {...TextBox74Cb} {...TextBox74IoProps}/>
</Flex2>
<Button1 className="p-Projects Button4 bpt" {...Button4Props} {...Button4Cb} {...Button4IoProps}/>
</Flex2>
<Carousel className="p-Projects Carousel3 bpt" {...Carousel3Props} {...Carousel3Cb} {...Carousel3IoProps}/>
<Flex2 className="p-Projects Flex35 bpt" {...Flex35Props} {...Flex35Cb} {...Flex35IoProps}>
<Flex2 className="p-Projects Flex36 bpt" {...Flex36Props} {...Flex36Cb} {...Flex36IoProps}>
<Image2 className="p-Projects Image47 bpt" {...Image47Props} {...Image47Cb} {...Image47IoProps}/>
<Image2 className="p-Projects Image49 bpt" {...Image49Props} {...Image49Cb} {...Image49IoProps}/>
</Flex2>
<Div className="p-Projects Div11 bpt" {...Div11Props} {...Div11Cb} {...Div11IoProps}>
<Flex2 className="p-Projects Flex45 bpt" {...Flex45Props} {...Flex45Cb} {...Flex45IoProps}>
<Flex2 className="p-Projects Flex46 bpt" {...Flex46Props} {...Flex46Cb} {...Flex46IoProps}>
<Image2 className="p-Projects Image50 bpt" {...Image50Props} {...Image50Cb} {...Image50IoProps}/>
<TextBox2 className="p-Projects TextBox93 bpt" {...TextBox93Props} {...TextBox93Cb} {...TextBox93IoProps}/>
<TextBox2 className="p-Projects TextBox95 bpt" {...TextBox95Props} {...TextBox95Cb} {...TextBox95IoProps}/>
</Flex2>
<Flex2 className="p-Projects Flex47 bpt" {...Flex47Props} {...Flex47Cb} {...Flex47IoProps}>
<Image2 className="p-Projects Image51 bpt" {...Image51Props} {...Image51Cb} {...Image51IoProps}/>
<TextBox2 className="p-Projects TextBox94 bpt" {...TextBox94Props} {...TextBox94Cb} {...TextBox94IoProps}/>
<TextBox2 className="p-Projects TextBox96 bpt" {...TextBox96Props} {...TextBox96Cb} {...TextBox96IoProps}/>
</Flex2>
</Flex2>
</Div>
</Flex2>
  </>);
}
