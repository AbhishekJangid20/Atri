import { useLayoutEffect, useEffect } from "react";
import useStore, { updateStoreStateFromController } from "../hooks/useStore";
import useIoStore from "../hooks/useIoStore";
import { useNavigate, useLocation } from "react-router-dom";
import { subscribeInternalNavigation } from "../utils/navigate";
import {fetchPageProps} from "../utils/fetchPageProps"
import { Div as Div3 } from "@atrilabs/react-component-manifests/src/manifests/Div/Div.tsx";
import { Flex as Flex8 } from "@atrilabs/react-component-manifests/src/manifests/Flex/Flex.tsx";
import { Image as Image7 } from "@atrilabs/react-component-manifests/src/manifests/Image/Image.tsx";
import { TextBox as TextBox8 } from "@atrilabs/react-component-manifests/src/manifests/TextBox/TextBox.tsx";
import { useDiv14Cb, useFlex111Cb, useFlex112Cb, useFlex113Cb, useFlex118Cb, useFlex119Cb, useFlex114Cb, useFlex115Cb, useFlex116Cb, useImage76Cb, useTextBox174Cb, useTextBox153Cb, useTextBox154Cb, useTextBox164Cb, useTextBox162Cb, useTextBox163Cb, useImage79Cb, useTextBox167Cb, useTextBox158Cb, useTextBox159Cb, useTextBox160Cb, useTextBox168Cb, useTextBox169Cb, useTextBox170Cb, useTextBox171Cb, useTextBox172Cb, useTextBox173Cb } from "../page-cbs/Last Paper";
import "../page-css/Last Paper.css";
import "../custom/Last Paper";

export default function LastPaper() {
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

  const Div14Props = useStore((state)=>state["Last Paper"]["Div14"]);
const Div14IoProps = useIoStore((state)=>state["Last Paper"]["Div14"]);
const Div14Cb = useDiv14Cb()
const Flex111Props = useStore((state)=>state["Last Paper"]["Flex111"]);
const Flex111IoProps = useIoStore((state)=>state["Last Paper"]["Flex111"]);
const Flex111Cb = useFlex111Cb()
const Flex112Props = useStore((state)=>state["Last Paper"]["Flex112"]);
const Flex112IoProps = useIoStore((state)=>state["Last Paper"]["Flex112"]);
const Flex112Cb = useFlex112Cb()
const Flex113Props = useStore((state)=>state["Last Paper"]["Flex113"]);
const Flex113IoProps = useIoStore((state)=>state["Last Paper"]["Flex113"]);
const Flex113Cb = useFlex113Cb()
const Flex118Props = useStore((state)=>state["Last Paper"]["Flex118"]);
const Flex118IoProps = useIoStore((state)=>state["Last Paper"]["Flex118"]);
const Flex118Cb = useFlex118Cb()
const Flex119Props = useStore((state)=>state["Last Paper"]["Flex119"]);
const Flex119IoProps = useIoStore((state)=>state["Last Paper"]["Flex119"]);
const Flex119Cb = useFlex119Cb()
const Flex114Props = useStore((state)=>state["Last Paper"]["Flex114"]);
const Flex114IoProps = useIoStore((state)=>state["Last Paper"]["Flex114"]);
const Flex114Cb = useFlex114Cb()
const Flex115Props = useStore((state)=>state["Last Paper"]["Flex115"]);
const Flex115IoProps = useIoStore((state)=>state["Last Paper"]["Flex115"]);
const Flex115Cb = useFlex115Cb()
const Flex116Props = useStore((state)=>state["Last Paper"]["Flex116"]);
const Flex116IoProps = useIoStore((state)=>state["Last Paper"]["Flex116"]);
const Flex116Cb = useFlex116Cb()
const Image76Props = useStore((state)=>state["Last Paper"]["Image76"]);
const Image76IoProps = useIoStore((state)=>state["Last Paper"]["Image76"]);
const Image76Cb = useImage76Cb()
const TextBox174Props = useStore((state)=>state["Last Paper"]["TextBox174"]);
const TextBox174IoProps = useIoStore((state)=>state["Last Paper"]["TextBox174"]);
const TextBox174Cb = useTextBox174Cb()
const TextBox153Props = useStore((state)=>state["Last Paper"]["TextBox153"]);
const TextBox153IoProps = useIoStore((state)=>state["Last Paper"]["TextBox153"]);
const TextBox153Cb = useTextBox153Cb()
const TextBox154Props = useStore((state)=>state["Last Paper"]["TextBox154"]);
const TextBox154IoProps = useIoStore((state)=>state["Last Paper"]["TextBox154"]);
const TextBox154Cb = useTextBox154Cb()
const TextBox164Props = useStore((state)=>state["Last Paper"]["TextBox164"]);
const TextBox164IoProps = useIoStore((state)=>state["Last Paper"]["TextBox164"]);
const TextBox164Cb = useTextBox164Cb()
const TextBox162Props = useStore((state)=>state["Last Paper"]["TextBox162"]);
const TextBox162IoProps = useIoStore((state)=>state["Last Paper"]["TextBox162"]);
const TextBox162Cb = useTextBox162Cb()
const TextBox163Props = useStore((state)=>state["Last Paper"]["TextBox163"]);
const TextBox163IoProps = useIoStore((state)=>state["Last Paper"]["TextBox163"]);
const TextBox163Cb = useTextBox163Cb()
const Image79Props = useStore((state)=>state["Last Paper"]["Image79"]);
const Image79IoProps = useIoStore((state)=>state["Last Paper"]["Image79"]);
const Image79Cb = useImage79Cb()
const TextBox167Props = useStore((state)=>state["Last Paper"]["TextBox167"]);
const TextBox167IoProps = useIoStore((state)=>state["Last Paper"]["TextBox167"]);
const TextBox167Cb = useTextBox167Cb()
const TextBox158Props = useStore((state)=>state["Last Paper"]["TextBox158"]);
const TextBox158IoProps = useIoStore((state)=>state["Last Paper"]["TextBox158"]);
const TextBox158Cb = useTextBox158Cb()
const TextBox159Props = useStore((state)=>state["Last Paper"]["TextBox159"]);
const TextBox159IoProps = useIoStore((state)=>state["Last Paper"]["TextBox159"]);
const TextBox159Cb = useTextBox159Cb()
const TextBox160Props = useStore((state)=>state["Last Paper"]["TextBox160"]);
const TextBox160IoProps = useIoStore((state)=>state["Last Paper"]["TextBox160"]);
const TextBox160Cb = useTextBox160Cb()
const TextBox168Props = useStore((state)=>state["Last Paper"]["TextBox168"]);
const TextBox168IoProps = useIoStore((state)=>state["Last Paper"]["TextBox168"]);
const TextBox168Cb = useTextBox168Cb()
const TextBox169Props = useStore((state)=>state["Last Paper"]["TextBox169"]);
const TextBox169IoProps = useIoStore((state)=>state["Last Paper"]["TextBox169"]);
const TextBox169Cb = useTextBox169Cb()
const TextBox170Props = useStore((state)=>state["Last Paper"]["TextBox170"]);
const TextBox170IoProps = useIoStore((state)=>state["Last Paper"]["TextBox170"]);
const TextBox170Cb = useTextBox170Cb()
const TextBox171Props = useStore((state)=>state["Last Paper"]["TextBox171"]);
const TextBox171IoProps = useIoStore((state)=>state["Last Paper"]["TextBox171"]);
const TextBox171Cb = useTextBox171Cb()
const TextBox172Props = useStore((state)=>state["Last Paper"]["TextBox172"]);
const TextBox172IoProps = useIoStore((state)=>state["Last Paper"]["TextBox172"]);
const TextBox172Cb = useTextBox172Cb()
const TextBox173Props = useStore((state)=>state["Last Paper"]["TextBox173"]);
const TextBox173IoProps = useIoStore((state)=>state["Last Paper"]["TextBox173"]);
const TextBox173Cb = useTextBox173Cb()

  return (<>
  <Div3 className="p-Last Paper Div14 bpt" {...Div14Props} {...Div14Cb} {...Div14IoProps}>
<Flex8 className="p-Last Paper Flex111 bpt" {...Flex111Props} {...Flex111Cb} {...Flex111IoProps}>
<TextBox8 className="p-Last Paper TextBox153 bpt" {...TextBox153Props} {...TextBox153Cb} {...TextBox153IoProps}/>
<TextBox8 className="p-Last Paper TextBox154 bpt" {...TextBox154Props} {...TextBox154Cb} {...TextBox154IoProps}/>
</Flex8>
<Image7 className="p-Last Paper Image76 bpt" {...Image76Props} {...Image76Cb} {...Image76IoProps}/>
<Flex8 className="p-Last Paper Flex112 bpt" {...Flex112Props} {...Flex112Cb} {...Flex112IoProps}>
<Flex8 className="p-Last Paper Flex113 bpt" {...Flex113Props} {...Flex113Cb} {...Flex113IoProps}>
<Flex8 className="p-Last Paper Flex118 bpt" {...Flex118Props} {...Flex118Cb} {...Flex118IoProps}>
<TextBox8 className="p-Last Paper TextBox162 bpt" {...TextBox162Props} {...TextBox162Cb} {...TextBox162IoProps}/>
<TextBox8 className="p-Last Paper TextBox163 bpt" {...TextBox163Props} {...TextBox163Cb} {...TextBox163IoProps}/>
</Flex8>
<TextBox8 className="p-Last Paper TextBox164 bpt" {...TextBox164Props} {...TextBox164Cb} {...TextBox164IoProps}/>
<Flex8 className="p-Last Paper Flex119 bpt" {...Flex119Props} {...Flex119Cb} {...Flex119IoProps}>
<Image7 className="p-Last Paper Image79 bpt" {...Image79Props} {...Image79Cb} {...Image79IoProps}/>
<TextBox8 className="p-Last Paper TextBox167 bpt" {...TextBox167Props} {...TextBox167Cb} {...TextBox167IoProps}/>
</Flex8>
</Flex8>
<Flex8 className="p-Last Paper Flex114 bpt" {...Flex114Props} {...Flex114Cb} {...Flex114IoProps}>
<TextBox8 className="p-Last Paper TextBox158 bpt" {...TextBox158Props} {...TextBox158Cb} {...TextBox158IoProps}/>
<TextBox8 className="p-Last Paper TextBox159 bpt" {...TextBox159Props} {...TextBox159Cb} {...TextBox159IoProps}/>
<TextBox8 className="p-Last Paper TextBox160 bpt" {...TextBox160Props} {...TextBox160Cb} {...TextBox160IoProps}/>
</Flex8>
<Flex8 className="p-Last Paper Flex115 bpt" {...Flex115Props} {...Flex115Cb} {...Flex115IoProps}>
<TextBox8 className="p-Last Paper TextBox168 bpt" {...TextBox168Props} {...TextBox168Cb} {...TextBox168IoProps}/>
<TextBox8 className="p-Last Paper TextBox169 bpt" {...TextBox169Props} {...TextBox169Cb} {...TextBox169IoProps}/>
<TextBox8 className="p-Last Paper TextBox170 bpt" {...TextBox170Props} {...TextBox170Cb} {...TextBox170IoProps}/>
</Flex8>
<Flex8 className="p-Last Paper Flex116 bpt" {...Flex116Props} {...Flex116Cb} {...Flex116IoProps}>
<TextBox8 className="p-Last Paper TextBox171 bpt" {...TextBox171Props} {...TextBox171Cb} {...TextBox171IoProps}/>
<TextBox8 className="p-Last Paper TextBox172 bpt" {...TextBox172Props} {...TextBox172Cb} {...TextBox172IoProps}/>
<TextBox8 className="p-Last Paper TextBox173 bpt" {...TextBox173Props} {...TextBox173Cb} {...TextBox173IoProps}/>
</Flex8>
</Flex8>
<TextBox8 className="p-Last Paper TextBox174 bpt" {...TextBox174Props} {...TextBox174Cb} {...TextBox174IoProps}/>
</Div3>
  </>);
}
