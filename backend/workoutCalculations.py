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
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 9.5:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 10:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 10.5:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 11:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 11.5:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 12:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 12.5:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 13:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 13.5:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 14:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 14.5:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 15:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    if runTime < 15.5:
        return {"QuarterMileTime":"", "RecoveryTime":""}
    # > 15.5 minutes
    return {"QuarterMileTime":"", "RecoveryTime":""}

def calculateSwim(swimTime):
    if swimTime < 8.5:
        return {"HundredYardTime":"1:16-1:21", "RecoveryTime":"2:32-3:23"}
    if swimTime < 9:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 9.5:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 10:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 10.5:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 11:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 11.5:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 12:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 12.5:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 13:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 13.5:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 14:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 14.5:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 15:
        return {"HundredYardTime":"", "RecoveryTime":""}
    if swimTime < 15.5:
        return {"HundredYardTime":"", "RecoveryTime":""}
    # > 15.5 minutes
    return {"HundredYardTime":"", "RecoveryTime":""}