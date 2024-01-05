import { ActivityName } from "./enums";
import { historyDiscovery, walkInTheVineyard, wineTasting } from "./list";


export const Activities = {
    [ActivityName.BALADE_VIGNES]: walkInTheVineyard,
    [ActivityName.DECOUVERTE_HISTOIRE]: historyDiscovery,
    [ActivityName.DEGUSTATION]: wineTasting,
};