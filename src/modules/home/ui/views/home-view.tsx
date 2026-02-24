"use client";

import AgentsListHeader from "@/modules/agents/ui/components/agents-list-header";
import { AgentsView } from "@/modules/agents/ui/views/agents-view";

export const HomeView = () => {

    return (
        <div>
            <AgentsListHeader/>
           <AgentsView/>
        </div>
    )
}
