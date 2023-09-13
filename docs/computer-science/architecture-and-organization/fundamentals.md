# Computer Architecture Fundamentals

## Von neumann architecture

## Cost Yield Equations

$$
\text{Cost of Die} = \frac{\text{Cost of wafer}}{\text{Dies per Wafer} \times \text{Die Yield}}
$$

$$
\text{Dies per Wafer} =
\frac{\pi d^2}{4S} -
\frac{\pi d}
{\sqrt{2S}}
$$

$$
\text{Die Yield} =
\text{Wafer Yield} \times \left( 1 + \frac{xS}{\alpha} \right) ^ {-\alpha}
$$

- $d$ - wafer diameter
- $S$ - die area
- $x$ - defects per unit area, 0.4 defects pe cm^2 in 90 nm
- $\alpha$ - parameter related to complexity of manufacturing. 0.4
- Wafer Yield - Number of Completely bad wafers
- <https://en.wikipedia.org/wiki/Wafer_(electronics)>

## Amdahl's Law

A task can be split into two parts

- a part that does not benefit from  improvement of resources of the system
- a part that benefits

Suppose,

- $T$ - total time for task before any improvement
- $p$ - fraction of execution time that would benefit from improvement of resources

Now if we don't use improvements

$$
T = (1-p)T + pT
$$

if we now used the improvements

- $s$ factor at which the resource improvement accelerate
- so the new time with relation to $s$

$$
T(s) = (1-p)T + \frac{p}{s}T
$$

Amdhal's law gives the theoretical
speedup in latency of the execution
of the execution of the whole task
at fixed workload $W$, which yields

$$
S_\text{latency}(s) = \frac{TW}{T(s)W}
= \frac{T}{T(s)}
= \frac{1}{1 - p + \frac{p}{s}}
$$

- speedup
    - Performance for entire task using the enhancement when possible
    - by
    - Performance for entire task without using the enhancement
    - or
    - or
    - Execution time for entire task without using the enhancement
    - by
    - Execution time for entire task using the enhancement when possible