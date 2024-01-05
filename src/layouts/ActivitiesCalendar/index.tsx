import { Activities } from "@/data/activities";
import { ActivityName } from "@/data/activities/enums";
import { Activity } from "./Activity";

export const ActivitiesCalendar = () => (
  <section className="flex flex-col gap-20">
    <Activity activity={Activities[ActivityName.BALADE_VIGNES]} />
    <Activity activity={Activities[ActivityName.DECOUVERTE_HISTOIRE]} />
    <Activity activity={Activities[ActivityName.DEGUSTATION]} />
  </section>
);
