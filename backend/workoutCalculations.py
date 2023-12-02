# Using thresholds here, i think there is a programmatic way of calculating 
# the maxes and sets for the runs and swims. Will look into this sometime.

# pushups and situps use the same formula
def calculatePushupsOrSitups(pushupsOrSitupsMax):
    if pushupsOrSitupsMax < 40:
        return {"Reps":"10-15", "Sets": "5-6"}
    if pushupsOrSitupsMax < 60:
        return {"Reps":"15-20", "Sets": "4-5"}
    if pushupsOrSitupsMax < 80:
        return {"Reps":"20-25", "Sets": "4-5"}
    if pushupsOrSitupsMax < 100:
        return {"Reps":"30-35", "Sets": "3-4"}
    # >100
    return {"Reps":"40-50", "Sets": "3-4"}

def calculatePullups(pullupsMax):
    if pullupsMax < 6:
        return {"Reps":"2-3", "Sets": "5-6"}
    if pullupsMax < 9:
        return {"Reps":"4-5", "Sets": "4-5"}
    if pullupsMax < 12:
        return {"Reps":"5-6", "Sets": "4-5"}
    if pullupsMax < 15:
        return {"Reps":"8-10", "Sets": "3-4"}
    # >15
    return {"Reps":"10-12", "Sets": "3-4"}

def calculateRun(runTime):
    if runTime < 8.5:
        return {"QuarterMileTime":"1:16-1:21", "RecoveryTime":"2:32-3:23"}
    if runTime < 9:
        return {"QuarterMileTime":"1:21-1:26", "RecoveryTime":"2:42-3:35"}
    if runTime < 9.5:
        return {"QuarterMileTime":"1:26-1:31", "RecoveryTime":"2:52-3:48"}
    if runTime < 10:
        return {"QuarterMileTime":"1:31-1:36", "RecoveryTime":"3:02-4:00"}
    if runTime < 10.5:
        return {"QuarterMileTime":"1:36-1:41", "RecoveryTime":"3:12-4:13"}
    if runTime < 11:
        return {"QuarterMileTime":"1:41-1:46", "RecoveryTime":"3:22-4:25"}
    if runTime < 11.5:
        return {"QuarterMileTime":"1:46-1:51", "RecoveryTime":"3:32-4:38"}
    if runTime < 12:
        return {"QuarterMileTime":"1:51-1:56", "RecoveryTime":"3:42-4:50"}
    if runTime < 12.5:
        return {"QuarterMileTime":"1:56-2:01", "RecoveryTime":"3:52-5:03"}
    if runTime < 13:
        return {"QuarterMileTime":"2:01-2:06", "RecoveryTime":"4:02-5:15"}
    if runTime < 13.5:
        return {"QuarterMileTime":"2:06-2:11", "RecoveryTime":"4:12-5:28"}
    if runTime < 14:
        return {"QuarterMileTime":"2:11-2:16", "RecoveryTime":"4:22-5:40"}
    if runTime < 14.5:
        return {"QuarterMileTime":"2:16-2:21", "RecoveryTime":"4:32-5:53"}
    if runTime < 15:
        return {"QuarterMileTime":"2:21-2:26", "RecoveryTime":"4:42-6:05"}
    if runTime < 15.5:
        return {"QuarterMileTime":"2:26-2:31", "RecoveryTime":"4:52-6:18"}
    # > 15.5 minutes
    return {"QuarterMileTime":"2:31-2:36", "RecoveryTime":"5:02-6:30"}

def calculateSwim(swimTime):
    if swimTime < 8.5:
        return {"HundredYardTime":"1:34-1:40", "RecoveryTime":"3:08-4:10"}
    if swimTime < 9:
        return {"HundredYardTime":"1:40-1:46", "RecoveryTime":"3:20-4:25"}
    if swimTime < 9.5:
        return {"HundredYardTime":"1:46-1:52", "RecoveryTime":"3:32-4:40"}
    if swimTime < 10:
        return {"HundredYardTime":"1:52-1:58", "RecoveryTime":"3:44-4:55"}
    if swimTime < 10.5:
        return {"HundredYardTime":"1:58-2:04", "RecoveryTime":"3:56-5:10"}
    if swimTime < 11:
        return {"HundredYardTime":"2:04-2:10", "RecoveryTime":"4:08-5:25"}
    if swimTime < 11.5:
        return {"HundredYardTime":"2:10-2:16", "RecoveryTime":"4:20-5:40"}
    if swimTime < 12:
        return {"HundredYardTime":"2:16-2:22 ", "RecoveryTime":"4:32-5:55"}
    if swimTime < 12.5:
        return {"HundredYardTime":"2:22-2:28", "RecoveryTime":"4:44-6:10"}
    if swimTime < 13:
        return {"HundredYardTime":"2:28-2:34", "RecoveryTime":"4:56-6:25"}
    if swimTime < 13.5:
        return {"HundredYardTime":"2:34-2:40", "RecoveryTime":"5:08-6:40"}
    if swimTime < 14:
        return {"HundredYardTime":"2:40-2:46", "RecoveryTime":"5:20-6:55"}
    if swimTime < 14.5:
        return {"HundredYardTime":"2:46-2:52", "RecoveryTime":"5:32-7:10"}
    if swimTime < 15:
        return {"HundredYardTime":"2:52-2:58", "RecoveryTime":"5:44-7:25"}
    if swimTime < 15.5:
        return {"HundredYardTime":"2:58-3:04", "RecoveryTime":"5:56-7:40"}
    # > 15.5 minutes
    return {"HundredYardTime":"3:04-3-10", "RecoveryTime":"6:08-7:55"}