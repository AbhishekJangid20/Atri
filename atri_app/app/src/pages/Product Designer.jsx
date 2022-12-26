import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex4 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image4 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox4 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex59Cb, useFlex60Cb, useFlex61Cb, useFlex62Cb, useFlex63Cb, useImage53Cb, useTextBox120Cb, useTextBox121Cb, useImage54Cb, useImage55Cb, useImage57Cb, useImage58Cb } from "../page-cbs/Product Designer";
import "../page-css/Product Designer.css";
import "../custom/Product Designer";

export default function ProductDesigner() {
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

  const Flex59Props = useStore((state)=>state["Product Designer"]["Flex59"]);
const Flex59IoProps = useIoStore((state)=>state["Product Designer"]["Flex59"]);
const Flex59Cb = useFlex59Cb()
const Flex60Props = useStore((state)=>state["Product Designer"]["Flex60"]);
const Flex60IoProps = useIoStore((state)=>state["Product Designer"]["Flex60"]);
const Flex60Cb = useFlex60Cb()
const Flex61Props = useStore((state)=>state["Product Designer"]["Flex61"]);
const Flex61IoProps = useIoStore((state)=>state["Product Designer"]["Flex61"]);
const Flex61Cb = useFlex61Cb()
const Flex62Props = useStore((state)=>state["Product Designer"]["Flex62"]);
const Flex62IoProps = useIoStore((state)=>state["Product Designer"]["Flex62"]);
const Flex62Cb = useFlex62Cb()
const Flex63Props = useStore((state)=>state["Product Designer"]["Flex63"]);
const Flex63IoProps = useIoStore((state)=>state["Product Designer"]["Flex63"]);
const Flex63Cb = useFlex63Cb()
const Image53Props = useStore((state)=>state["Product Designer"]["Image53"]);
const Image53IoProps = useIoStore((state)=>state["Product Designer"]["Image53"]);
const Image53Cb = useImage53Cb()
const TextBox120Props = useStore((state)=>state["Product Designer"]["TextBox120"]);
const TextBox120IoProps = useIoStore((state)=>state["Product Designer"]["TextBox120"]);
const TextBox120Cb = useTextBox120Cb()
const TextBox121Props = useStore((state)=>state["Product Designer"]["TextBox121"]);
const TextBox121IoProps = useIoStore((state)=>state["Product Designer"]["TextBox121"]);
const TextBox121Cb = useTextBox121Cb()
const Image54Props = useStore((state)=>state["Product Designer"]["Image54"]);
const Image54IoProps = useIoStore((state)=>state["Product Designer"]["Image54"]);
const Image54Cb = useImage54Cb()
const Image55Props = useStore((state)=>state["Product Designer"]["Image55"]);
const Image55IoProps = useIoStore((state)=>state["Product Designer"]["Image55"]);
const Image55Cb = useImage55Cb()
const Image57Props = useStore((state)=>state["Product Designer"]["Image57"]);
const Image57IoProps = useIoStore((state)=>state["Product Designer"]["Image57"]);
const Image57Cb = useImage57Cb()
const Image58Props = useStore((state)=>state["Product Designer"]["Image58"]);
const Image58IoProps = useIoStore((state)=>state["Product Designer"]["Image58"]);
const Image58Cb = useImage58Cb()

  return (<>
  <Flex4 className="p-Product Designer Flex59 bpt" {...Flex59Props} {...Flex59Cb} {...Flex59IoProps}>
<Flex4 className="p-Product Designer Flex60 bpt" {...Flex60Props} {...Flex60Cb} {...Flex60IoProps}>
<Image4 className="p-Product Designer Image53 bpt" {...Image53Props} {...Image53Cb} {...Image53IoProps}/>
<TextBox4 className="p-Product Designer TextBox120 bpt" {...TextBox120Props} {...TextBox120Cb} {...TextBox120IoProps}/>
</Flex4>
<Flex4 className="p-Product Designer Flex61 bpt" {...Flex61Props} {...Flex61Cb} {...Flex61IoProps}>
<TextBox4 className="p-Product Designer TextBox121 bpt" {...TextBox121Props} {...TextBox121Cb} {...TextBox121IoProps}/>
</Flex4>
</Flex4>
<Flex4 className="p-Product Designer Flex62 bpt" {...Flex62Props} {...Flex62Cb} {...Flex62IoProps}>
<Image4 className="p-Product Designer Image54 bpt" {...Image54Props} {...Image54Cb} {...Image54IoProps}/>
<Image4 className="p-Product Designer Image55 bpt" {...Image55Props} {...Image55Cb} {...Image55IoProps}/>
<Flex4 className="p-Product Designer Flex63 bpt" {...Flex63Props} {...Flex63Cb} {...Flex63IoProps}>
<Image4 className="p-Product Designer Image57 bpt" {...Image57Props} {...Image57Cb} {...Image57IoProps}/>
<Image4 className="p-Product Designer Image58 bpt" {...Image58Props} {...Image58Cb} {...Image58IoProps}/>
</Flex4>
</Flex4>
  </>);
}
