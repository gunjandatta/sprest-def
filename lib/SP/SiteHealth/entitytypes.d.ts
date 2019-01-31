import { IBaseExecution } from "../../";
import { SP } from "../../";

/*********************************************
* SiteHealthSummary
**********************************************/
export interface SiteHealthSummary {
	FailedErrorCount?: number;
	FailedWarningCount?: number;
	PassedCount?: number;
	Results?: Array<SP.SiteHealth.SiteHealthResult>;
}
