import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Flex as Flex5 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { TextBox as TextBox5 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useFlex64Cb, useFlex65Cb, useFlex69Cb, useFlex71Cb, useFlex66Cb, useFlex78Cb, useFlex93Cb, useFlex94Cb, useFlex79Cb, useFlex80Cb, useFlex81Cb, useFlex99Cb, useFlex101Cb, useFlex90Cb, useFlex91Cb, useFlex92Cb, useFlex102Cb, useFlex103Cb, useTextBox122Cb, useTextBox125Cb, useTextBox126Cb, useTextBox127Cb, useTextBox124Cb, useTextBox135Cb, useTextBox136Cb, useTextBox137Cb, useTextBox129Cb, useTextBox130Cb, useTextBox131Cb, useTextBox141Cb, useTextBox142Cb, useTextBox143Cb, useTextBox132Cb, useTextBox133Cb, useTextBox134Cb, useTextBox144Cb, useTextBox145Cb, useTextBox146Cb } from "../page-cbs/Product Designer 2";
import "../page-css/Product Designer 2.css";
import "../custom/Product Designer 2";

export default function ProductDesigner2() {
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

  const Flex64Props = useStore((state)=>state["Product Designer 2"]["Flex64"]);
const Flex64IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex64"]);
const Flex64Cb = useFlex64Cb()
const Flex65Props = useStore((state)=>state["Product Designer 2"]["Flex65"]);
const Flex65IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex65"]);
const Flex65Cb = useFlex65Cb()
const Flex69Props = useStore((state)=>state["Product Designer 2"]["Flex69"]);
const Flex69IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex69"]);
const Flex69Cb = useFlex69Cb()
const Flex71Props = useStore((state)=>state["Product Designer 2"]["Flex71"]);
const Flex71IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex71"]);
const Flex71Cb = useFlex71Cb()
const Flex66Props = useStore((state)=>state["Product Designer 2"]["Flex66"]);
const Flex66IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex66"]);
const Flex66Cb = useFlex66Cb()
const Flex78Props = useStore((state)=>state["Product Designer 2"]["Flex78"]);
const Flex78IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex78"]);
const Flex78Cb = useFlex78Cb()
const Flex93Props = useStore((state)=>state["Product Designer 2"]["Flex93"]);
const Flex93IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex93"]);
const Flex93Cb = useFlex93Cb()
const Flex94Props = useStore((state)=>state["Product Designer 2"]["Flex94"]);
const Flex94IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex94"]);
const Flex94Cb = useFlex94Cb()
const Flex79Props = useStore((state)=>state["Product Designer 2"]["Flex79"]);
const Flex79IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex79"]);
const Flex79Cb = useFlex79Cb()
const Flex80Props = useStore((state)=>state["Product Designer 2"]["Flex80"]);
const Flex80IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex80"]);
const Flex80Cb = useFlex80Cb()
const Flex81Props = useStore((state)=>state["Product Designer 2"]["Flex81"]);
const Flex81IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex81"]);
const Flex81Cb = useFlex81Cb()
const Flex99Props = useStore((state)=>state["Product Designer 2"]["Flex99"]);
const Flex99IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex99"]);
const Flex99Cb = useFlex99Cb()
const Flex101Props = useStore((state)=>state["Product Designer 2"]["Flex101"]);
const Flex101IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex101"]);
const Flex101Cb = useFlex101Cb()
const Flex90Props = useStore((state)=>state["Product Designer 2"]["Flex90"]);
const Flex90IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex90"]);
const Flex90Cb = useFlex90Cb()
const Flex91Props = useStore((state)=>state["Product Designer 2"]["Flex91"]);
const Flex91IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex91"]);
const Flex91Cb = useFlex91Cb()
const Flex92Props = useStore((state)=>state["Product Designer 2"]["Flex92"]);
const Flex92IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex92"]);
const Flex92Cb = useFlex92Cb()
const Flex102Props = useStore((state)=>state["Product Designer 2"]["Flex102"]);
const Flex102IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex102"]);
const Flex102Cb = useFlex102Cb()
const Flex103Props = useStore((state)=>state["Product Designer 2"]["Flex103"]);
const Flex103IoProps = useIoStore((state)=>state["Product Designer 2"]["Flex103"]);
const Flex103Cb = useFlex103Cb()
const TextBox122Props = useStore((state)=>state["Product Designer 2"]["TextBox122"]);
const TextBox122IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox122"]);
const TextBox122Cb = useTextBox122Cb()
const TextBox125Props = useStore((state)=>state["Product Designer 2"]["TextBox125"]);
const TextBox125IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox125"]);
const TextBox125Cb = useTextBox125Cb()
const TextBox126Props = useStore((state)=>state["Product Designer 2"]["TextBox126"]);
const TextBox126IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox126"]);
const TextBox126Cb = useTextBox126Cb()
const TextBox127Props = useStore((state)=>state["Product Designer 2"]["TextBox127"]);
const TextBox127IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox127"]);
const TextBox127Cb = useTextBox127Cb()
const TextBox124Props = useStore((state)=>state["Product Designer 2"]["TextBox124"]);
const TextBox124IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox124"]);
const TextBox124Cb = useTextBox124Cb()
const TextBox135Props = useStore((state)=>state["Product Designer 2"]["TextBox135"]);
const TextBox135IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox135"]);
const TextBox135Cb = useTextBox135Cb()
const TextBox136Props = useStore((state)=>state["Product Designer 2"]["TextBox136"]);
const TextBox136IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox136"]);
const TextBox136Cb = useTextBox136Cb()
const TextBox137Props = useStore((state)=>state["Product Designer 2"]["TextBox137"]);
const TextBox137IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox137"]);
const TextBox137Cb = useTextBox137Cb()
const TextBox129Props = useStore((state)=>state["Product Designer 2"]["TextBox129"]);
const TextBox129IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox129"]);
const TextBox129Cb = useTextBox129Cb()
const TextBox130Props = useStore((state)=>state["Product Designer 2"]["TextBox130"]);
const TextBox130IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox130"]);
const TextBox130Cb = useTextBox130Cb()
const TextBox131Props = useStore((state)=>state["Product Designer 2"]["TextBox131"]);
const TextBox131IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox131"]);
const TextBox131Cb = useTextBox131Cb()
const TextBox141Props = useStore((state)=>state["Product Designer 2"]["TextBox141"]);
const TextBox141IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox141"]);
const TextBox141Cb = useTextBox141Cb()
const TextBox142Props = useStore((state)=>state["Product Designer 2"]["TextBox142"]);
const TextBox142IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox142"]);
const TextBox142Cb = useTextBox142Cb()
const TextBox143Props = useStore((state)=>state["Product Designer 2"]["TextBox143"]);
const TextBox143IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox143"]);
const TextBox143Cb = useTextBox143Cb()
const TextBox132Props = useStore((state)=>state["Product Designer 2"]["TextBox132"]);
const TextBox132IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox132"]);
const TextBox132Cb = useTextBox132Cb()
const TextBox133Props = useStore((state)=>state["Product Designer 2"]["TextBox133"]);
const TextBox133IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox133"]);
const TextBox133Cb = useTextBox133Cb()
const TextBox134Props = useStore((state)=>state["Product Designer 2"]["TextBox134"]);
const TextBox134IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox134"]);
const TextBox134Cb = useTextBox134Cb()
const TextBox144Props = useStore((state)=>state["Product Designer 2"]["TextBox144"]);
const TextBox144IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox144"]);
const TextBox144Cb = useTextBox144Cb()
const TextBox145Props = useStore((state)=>state["Product Designer 2"]["TextBox145"]);
const TextBox145IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox145"]);
const TextBox145Cb = useTextBox145Cb()
const TextBox146Props = useStore((state)=>state["Product Designer 2"]["TextBox146"]);
const TextBox146IoProps = useIoStore((state)=>state["Product Designer 2"]["TextBox146"]);
const TextBox146Cb = useTextBox146Cb()

  return (<>
  <Flex5 className="p-Product Designer 2 Flex64 bpt" {...Flex64Props} {...Flex64Cb} {...Flex64IoProps}>
<Flex5 className="p-Product Designer 2 Flex65 bpt" {...Flex65Props} {...Flex65Cb} {...Flex65IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox122 bpt" {...TextBox122Props} {...TextBox122Cb} {...TextBox122IoProps}/>
<Flex5 className="p-Product Designer 2 Flex69 bpt" {...Flex69Props} {...Flex69Cb} {...Flex69IoProps}>
<Flex5 className="p-Product Designer 2 Flex71 bpt" {...Flex71Props} {...Flex71Cb} {...Flex71IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox127 bpt" {...TextBox127Props} {...TextBox127Cb} {...TextBox127IoProps}/>
<TextBox5 className="p-Product Designer 2 TextBox126 bpt" {...TextBox126Props} {...TextBox126Cb} {...TextBox126IoProps}/>
</Flex5>
<TextBox5 className="p-Product Designer 2 TextBox125 bpt" {...TextBox125Props} {...TextBox125Cb} {...TextBox125IoProps}/>
</Flex5>
</Flex5>
<Flex5 className="p-Product Designer 2 Flex66 bpt" {...Flex66Props} {...Flex66Cb} {...Flex66IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox124 bpt" {...TextBox124Props} {...TextBox124Cb} {...TextBox124IoProps}/>
<Flex5 className="p-Product Designer 2 Flex78 bpt" {...Flex78Props} {...Flex78Cb} {...Flex78IoProps}>
<Flex5 className="p-Product Designer 2 Flex93 bpt" {...Flex93Props} {...Flex93Cb} {...Flex93IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox135 bpt" {...TextBox135Props} {...TextBox135Cb} {...TextBox135IoProps}/>
<TextBox5 className="p-Product Designer 2 TextBox136 bpt" {...TextBox136Props} {...TextBox136Cb} {...TextBox136IoProps}/>
</Flex5>
<Flex5 className="p-Product Designer 2 Flex94 bpt" {...Flex94Props} {...Flex94Cb} {...Flex94IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox137 bpt" {...TextBox137Props} {...TextBox137Cb} {...TextBox137IoProps}/>
</Flex5>
</Flex5>
</Flex5>
</Flex5>
<Flex5 className="p-Product Designer 2 Flex79 bpt" {...Flex79Props} {...Flex79Cb} {...Flex79IoProps}>
<Flex5 className="p-Product Designer 2 Flex80 bpt" {...Flex80Props} {...Flex80Cb} {...Flex80IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox129 bpt" {...TextBox129Props} {...TextBox129Cb} {...TextBox129IoProps}/>
<TextBox5 className="p-Product Designer 2 TextBox130 bpt" {...TextBox130Props} {...TextBox130Cb} {...TextBox130IoProps}/>
</Flex5>
<Flex5 className="p-Product Designer 2 Flex81 bpt" {...Flex81Props} {...Flex81Cb} {...Flex81IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox131 bpt" {...TextBox131Props} {...TextBox131Cb} {...TextBox131IoProps}/>
</Flex5>
<Flex5 className="p-Product Designer 2 Flex99 bpt" {...Flex99Props} {...Flex99Cb} {...Flex99IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox141 bpt" {...TextBox141Props} {...TextBox141Cb} {...TextBox141IoProps}/>
<TextBox5 className="p-Product Designer 2 TextBox142 bpt" {...TextBox142Props} {...TextBox142Cb} {...TextBox142IoProps}/>
</Flex5>
<Flex5 className="p-Product Designer 2 Flex101 bpt" {...Flex101Props} {...Flex101Cb} {...Flex101IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox143 bpt" {...TextBox143Props} {...TextBox143Cb} {...TextBox143IoProps}/>
</Flex5>
</Flex5>
<Flex5 className="p-Product Designer 2 Flex90 bpt" {...Flex90Props} {...Flex90Cb} {...Flex90IoProps}>
<Flex5 className="p-Product Designer 2 Flex91 bpt" {...Flex91Props} {...Flex91Cb} {...Flex91IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox132 bpt" {...TextBox132Props} {...TextBox132Cb} {...TextBox132IoProps}/>
<TextBox5 className="p-Product Designer 2 TextBox133 bpt" {...TextBox133Props} {...TextBox133Cb} {...TextBox133IoProps}/>
</Flex5>
<Flex5 className="p-Product Designer 2 Flex92 bpt" {...Flex92Props} {...Flex92Cb} {...Flex92IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox134 bpt" {...TextBox134Props} {...TextBox134Cb} {...TextBox134IoProps}/>
</Flex5>
<Flex5 className="p-Product Designer 2 Flex102 bpt" {...Flex102Props} {...Flex102Cb} {...Flex102IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox144 bpt" {...TextBox144Props} {...TextBox144Cb} {...TextBox144IoProps}/>
<TextBox5 className="p-Product Designer 2 TextBox145 bpt" {...TextBox145Props} {...TextBox145Cb} {...TextBox145IoProps}/>
</Flex5>
<Flex5 className="p-Product Designer 2 Flex103 bpt" {...Flex103Props} {...Flex103Cb} {...Flex103IoProps}>
<TextBox5 className="p-Product Designer 2 TextBox146 bpt" {...TextBox146Props} {...TextBox146Cb} {...TextBox146IoProps}/>
</Flex5>
</Flex5>
  </>);
}
