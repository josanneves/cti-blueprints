import { PropertyType } from "@/assets/scripts/PageEditor";
import { InternalTelemetry } from "./InternalTelemetry";

export const InternalTelemetryTable = {
    id: "internal_telemetry",
    name: "Internal Telemetry",
    path: "*.data_sources.internal_telemetry",
    type: PropertyType.BasicTable,
    layout: {
        cols: 1,
    },
    properties: [
        {
            ...InternalTelemetry,
            row: 0,
            col: 1
        }
    ]
}
