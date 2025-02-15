import { MitreAttackTable } from "../properties/MitreAttackTable";
import { MitreAttackTableSimple } from "../properties/MitreAttackTableSimple";

export const MitreAttackTableIaSection = {
    id: "mitre_attack",
    name: "MITRE ATT&CK",
    layout: {
        rows: 2,
        cols: 1,
    },
    properties: [
        {
            ...MitreAttackTable,
            id: "mitre_attack_table_likely_in_network",
            path: "*.mitre_attack_table.likely_in_network",
            name: "TTPs Likely to Be in the Network",
            row: 1,
            col: 1
        },
        {
            ...MitreAttackTableSimple,
            id: "mitre_attack_table_observed",
            path: "*.mitre_attack_table.observed",
            name: "TTPs Observed in the Intrusion",
            row: 2,
            col: 1
        }
    ]
}
