import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div1 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex3 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image3 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox3 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useDiv12Cb, useFlex48Cb, useFlex49Cb, useFlex50Cb, useFlex53Cb, useFlex54Cb, useFlex57Cb, useFlex58Cb, useImage52Cb, useTextBox97Cb, useTextBox98Cb, useTextBox100Cb, useTextBox101Cb, useTextBox99Cb, useTextBox104Cb, useTextBox105Cb, useTextBox106Cb, useTextBox113Cb, useTextBox114Cb, useTextBox115Cb, useTextBox116Cb, useTextBox118Cb, useTextBox119Cb } from "../page-cbs/Blogs";
import "../page-css/Blogs.css";
import "../custom/Blogs";

export default function Blogs() {
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

  const Div12Props = useStore((state)=>state["Blogs"]["Div12"]);
const Div12IoProps = useIoStore((state)=>state["Blogs"]["Div12"]);
const Div12Cb = useDiv12Cb()
const Flex48Props = useStore((state)=>state["Blogs"]["Flex48"]);
const Flex48IoProps = useIoStore((state)=>state["Blogs"]["Flex48"]);
const Flex48Cb = useFlex48Cb()
const Flex49Props = useStore((state)=>state["Blogs"]["Flex49"]);
const Flex49IoProps = useIoStore((state)=>state["Blogs"]["Flex49"]);
const Flex49Cb = useFlex49Cb()
const Flex50Props = useStore((state)=>state["Blogs"]["Flex50"]);
const Flex50IoProps = useIoStore((state)=>state["Blogs"]["Flex50"]);
const Flex50Cb = useFlex50Cb()
const Flex53Props = useStore((state)=>state["Blogs"]["Flex53"]);
const Flex53IoProps = useIoStore((state)=>state["Blogs"]["Flex53"]);
const Flex53Cb = useFlex53Cb()
const Flex54Props = useStore((state)=>state["Blogs"]["Flex54"]);
const Flex54IoProps = useIoStore((state)=>state["Blogs"]["Flex54"]);
const Flex54Cb = useFlex54Cb()
const Flex57Props = useStore((state)=>state["Blogs"]["Flex57"]);
const Flex57IoProps = useIoStore((state)=>state["Blogs"]["Flex57"]);
const Flex57Cb = useFlex57Cb()
const Flex58Props = useStore((state)=>state["Blogs"]["Flex58"]);
const Flex58IoProps = useIoStore((state)=>state["Blogs"]["Flex58"]);
const Flex58Cb = useFlex58Cb()
const Image52Props = useStore((state)=>state["Blogs"]["Image52"]);
const Image52IoProps = useIoStore((state)=>state["Blogs"]["Image52"]);
const Image52Cb = useImage52Cb()
const TextBox97Props = useStore((state)=>state["Blogs"]["TextBox97"]);
const TextBox97IoProps = useIoStore((state)=>state["Blogs"]["TextBox97"]);
const TextBox97Cb = useTextBox97Cb()
const TextBox98Props = useStore((state)=>state["Blogs"]["TextBox98"]);
const TextBox98IoProps = useIoStore((state)=>state["Blogs"]["TextBox98"]);
const TextBox98Cb = useTextBox98Cb()
const TextBox100Props = useStore((state)=>state["Blogs"]["TextBox100"]);
const TextBox100IoProps = useIoStore((state)=>state["Blogs"]["TextBox100"]);
const TextBox100Cb = useTextBox100Cb()
const TextBox101Props = useStore((state)=>state["Blogs"]["TextBox101"]);
const TextBox101IoProps = useIoStore((state)=>state["Blogs"]["TextBox101"]);
const TextBox101Cb = useTextBox101Cb()
const TextBox99Props = useStore((state)=>state["Blogs"]["TextBox99"]);
const TextBox99IoProps = useIoStore((state)=>state["Blogs"]["TextBox99"]);
const TextBox99Cb = useTextBox99Cb()
const TextBox104Props = useStore((state)=>state["Blogs"]["TextBox104"]);
const TextBox104IoProps = useIoStore((state)=>state["Blogs"]["TextBox104"]);
const TextBox104Cb = useTextBox104Cb()
const TextBox105Props = useStore((state)=>state["Blogs"]["TextBox105"]);
const TextBox105IoProps = useIoStore((state)=>state["Blogs"]["TextBox105"]);
const TextBox105Cb = useTextBox105Cb()
const TextBox106Props = useStore((state)=>state["Blogs"]["TextBox106"]);
const TextBox106IoProps = useIoStore((state)=>state["Blogs"]["TextBox106"]);
const TextBox106Cb = useTextBox106Cb()
const TextBox113Props = useStore((state)=>state["Blogs"]["TextBox113"]);
const TextBox113IoProps = useIoStore((state)=>state["Blogs"]["TextBox113"]);
const TextBox113Cb = useTextBox113Cb()
const TextBox114Props = useStore((state)=>state["Blogs"]["TextBox114"]);
const TextBox114IoProps = useIoStore((state)=>state["Blogs"]["TextBox114"]);
const TextBox114Cb = useTextBox114Cb()
const TextBox115Props = useStore((state)=>state["Blogs"]["TextBox115"]);
const TextBox115IoProps = useIoStore((state)=>state["Blogs"]["TextBox115"]);
const TextBox115Cb = useTextBox115Cb()
const TextBox116Props = useStore((state)=>state["Blogs"]["TextBox116"]);
const TextBox116IoProps = useIoStore((state)=>state["Blogs"]["TextBox116"]);
const TextBox116Cb = useTextBox116Cb()
const TextBox118Props = useStore((state)=>state["Blogs"]["TextBox118"]);
const TextBox118IoProps = useIoStore((state)=>state["Blogs"]["TextBox118"]);
const TextBox118Cb = useTextBox118Cb()
const TextBox119Props = useStore((state)=>state["Blogs"]["TextBox119"]);
const TextBox119IoProps = useIoStore((state)=>state["Blogs"]["TextBox119"]);
const TextBox119Cb = useTextBox119Cb()

  return (<>
  <Div1 className="p-Blogs Div12 bpt" {...Div12Props} {...Div12Cb} {...Div12IoProps}>
<Flex3 className="p-Blogs Flex48 bpt" {...Flex48Props} {...Flex48Cb} {...Flex48IoProps}>
<Flex3 className="p-Blogs Flex49 bpt" {...Flex49Props} {...Flex49Cb} {...Flex49IoProps}>
<Image3 className="p-Blogs Image52 bpt" {...Image52Props} {...Image52Cb} {...Image52IoProps}/>
<TextBox3 className="p-Blogs TextBox97 bpt" {...TextBox97Props} {...TextBox97Cb} {...TextBox97IoProps}/>
<TextBox3 className="p-Blogs TextBox98 bpt" {...TextBox98Props} {...TextBox98Cb} {...TextBox98IoProps}/>
</Flex3>
<Flex3 className="p-Blogs Flex50 bpt" {...Flex50Props} {...Flex50Cb} {...Flex50IoProps}>
<Flex3 className="p-Blogs Flex53 bpt" {...Flex53Props} {...Flex53Cb} {...Flex53IoProps}>
<TextBox3 className="p-Blogs TextBox99 bpt" {...TextBox99Props} {...TextBox99Cb} {...TextBox99IoProps}/>
</Flex3>
<TextBox3 className="p-Blogs TextBox100 bpt" {...TextBox100Props} {...TextBox100Cb} {...TextBox100IoProps}/>
<TextBox3 className="p-Blogs TextBox101 bpt" {...TextBox101Props} {...TextBox101Cb} {...TextBox101IoProps}/>
<Flex3 className="p-Blogs Flex54 bpt" {...Flex54Props} {...Flex54Cb} {...Flex54IoProps}>
<TextBox3 className="p-Blogs TextBox104 bpt" {...TextBox104Props} {...TextBox104Cb} {...TextBox104IoProps}/>
<TextBox3 className="p-Blogs TextBox105 bpt" {...TextBox105Props} {...TextBox105Cb} {...TextBox105IoProps}/>
<TextBox3 className="p-Blogs TextBox106 bpt" {...TextBox106Props} {...TextBox106Cb} {...TextBox106IoProps}/>
<Flex3 className="p-Blogs Flex57 bpt" {...Flex57Props} {...Flex57Cb} {...Flex57IoProps}>
<TextBox3 className="p-Blogs TextBox113 bpt" {...TextBox113Props} {...TextBox113Cb} {...TextBox113IoProps}/>
<TextBox3 className="p-Blogs TextBox115 bpt" {...TextBox115Props} {...TextBox115Cb} {...TextBox115IoProps}/>
<TextBox3 className="p-Blogs TextBox114 bpt" {...TextBox114Props} {...TextBox114Cb} {...TextBox114IoProps}/>
<Flex3 className="p-Blogs Flex58 bpt" {...Flex58Props} {...Flex58Cb} {...Flex58IoProps}>
<TextBox3 className="p-Blogs TextBox118 bpt" {...TextBox118Props} {...TextBox118Cb} {...TextBox118IoProps}/>
<TextBox3 className="p-Blogs TextBox119 bpt" {...TextBox119Props} {...TextBox119Cb} {...TextBox119IoProps}/>
<TextBox3 className="p-Blogs TextBox116 bpt" {...TextBox116Props} {...TextBox116Cb} {...TextBox116IoProps}/>
</Flex3>
</Flex3>
</Flex3>
</Flex3>
</Flex3>
</Div1>
  </>);
}
